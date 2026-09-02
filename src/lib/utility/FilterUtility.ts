/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FilterUtility.ts
 *
 */

import { EnumLike, EnumUtility } from './EnumUtility';

/**
 * The way multiple filter conditions are connected together.
 */
export enum FilterJoinType {
  AND = 'AND',
  OR = 'OR',
}

/**
 * All operations allowed in a filter condition.
 *
 * - For number properties: LessThan, LessOrEqual, Equal, GreaterOrEqual, GreaterThan, Between
 * - For date properties: same as number
 * - For string properties: all of the above plus BeginsWith, EndsWith, Contains
 *
 * Only Between examines both `lowValue` and `highValue`; every other
 * operation compares against `lowValue` alone.
 */
export enum FilterOperation {
  LessThan = '<',
  LessOrEqual = '<=',
  Equal = '=',
  GreaterOrEqual = '>=',
  GreaterThan = '>',
  Between = 'Between',
  BeginsWith = 'BeginsWith',
  EndsWith = 'EndsWith',
  Contains = 'Contains',
}

/**
 * Value types supported by a filter condition.
 */
export type FilterValue = number | string | Date;

/**
 * A single filter condition: a property of the item, an operation, and
 * the value(s) to compare against.
 *
 * `highValue` is only used by FilterOperation.Between, which checks the
 * inclusive range `lowValue <= property <= highValue`.
 */
export interface IFilterCondition {
  /** Name of the property of the item to filter on */
  property: string;
  /** Operation applied to the property */
  operation: FilterOperation;
  /** The value to compare against, or the low bound of a Between range */
  lowValue?: FilterValue;
  /** High bound of a Between range; ignored by all other operations */
  highValue?: FilterValue;
  /**
   * The enum object of the property, when the property is an enum.
   * When set, the condition performs enum validation: a match additionally
   * requires the item's property value AND every bound value used
   * (`lowValue`, plus `highValue` for Between) to be one of the enum's
   * member values — except for BeginsWith/EndsWith/Contains, whose
   * `lowValue` is a pattern and is not bound-checked. A missing
   * (null/undefined) property never matches an enum-validated condition.
   */
  enumValues?: EnumLike;
}

/**
 * A filter definition: a join of members, where each member is either a
 * single condition or a nested definition (allowing SQL-like arbitrary
 * nesting, e.g. `condA AND (condB OR condC)`).
 *
 * An empty member list matches everything.
 *
 * A whole filter is exactly one of three shapes (see {@link FilterRoot}):
 * - **Case 0 — empty**: `{ conditions: [] }` — matches everything.
 * - **Case 1 — one node**: a bare `IFilterCondition`, or equivalently a
 *   1-member group `{ conditions: [c] }` whose `join` is irrelevant — the
 *   whole filter is a single condition. Use {@link FilterUtility.ToDefinition}
 *   / {@link FilterUtility.Simplify} to switch between the two spellings.
 * - **Case 2 — group tree**: a definition with >= 2 members, nested groups
 *   allowed. Leaves are conditions; every internal (nested) group branches
 *   with >= 2 children. A group may mix condition leaves and nested
 *   sub-groups side by side — mixed members are valid.
 */
export interface IFilterDefinition {
  /** How the members are connected, defaults to FilterJoinType.AND */
  join?: FilterJoinType;
  /** Conditions and/or nested groups of this filter */
  conditions: Array<IFilterCondition | IFilterDefinition>;
}

/** One member of a filter definition: a leaf condition or a nested group. */
export type FilterMember = IFilterCondition | IFilterDefinition;

/**
 * The root of a filter: a group definition (case 0 — empty, or case 2 —
 * >= 2 members) or a bare condition (case 1 — the whole filter is one
 * condition). **FilterList** and **MatchFilter** accept both shapes; a
 * bare condition matches exactly like the 1-member wrapper
 * `{ conditions: [c] }`, so the two spellings of case 1 are
 * interchangeable and either may be persisted.
 */
export type FilterRoot = IFilterCondition | IFilterDefinition;

type ValueKind = 'number' | 'string' | 'date' | 'other';

/**
 * Utility for filtering over a list of items.
 *
 * A filter is a search with a strict definition: it consists of conditions
 * joined by AND / OR, possibly nested to arbitrary depth (each nested
 * IFilterDefinition acts like a parenthesized group). Each condition
 * specifies a property, an operation and the value(s) to compare against.
 *
 * A filter handed to **FilterList** / **MatchFilter** is one of three
 * shapes (the taxonomy of {@link FilterRoot}): empty (`{ conditions: [] }`,
 * matches everything), a single bare condition, or a group tree.
 *
 * Notes:
 * - The property kind (number / string / date) is detected from the runtime
 *   value of the property; a missing (null/undefined) property is typed by
 *   the condition value, where an absent number is treated as 0 and an
 *   absent string is treated as ''. An absent date never matches.
 * - Enum properties need no special kind: TypeScript erases enums at
 *   runtime, so a numeric-enum property is filtered as a number and a
 *   string-enum property as a string. Enum members can be used directly as
 *   condition values (e.g. `lowValue: Priority.High`). Beware that a missing
 *   property follows the missing-value rule above, so an absent numeric
 *   enum property matches the member whose value is 0.
 * - Set the condition's `enumValues` to the enum object (e.g.
 *   `enumValues: Priority`) to enforce enum validation: non-member values
 *   (like a `priority = 7`) and missing properties never match, and every
 *   bound value must also be a member (BeginsWith/EndsWith/Contains patterns
 *   are exempt from the bound check).
 * - Number / date properties support <, <=, =, >=, >, Between; string
 *   properties additionally support BeginsWith, EndsWith, Contains.
 * - Only Between uses highValue (inclusive on both bounds); the other
 *   operations only look at lowValue.
 * - String comparisons are case-sensitive.
 * - An operation that is not allowed for the property kind never matches.
 */
export class FilterUtility {
  /**
   * Filter a list of items with the given filter.
   * @param list The list to filter
   * @param filter A filter root — a group definition or a bare condition —
   * or just the list of members (joined by AND)
   * @returns A new array holding all items that match the filter
   */
  public static FilterList<T>(list: T[], filter: FilterRoot | FilterRoot[]): T[] {
    const definition: IFilterDefinition = Array.isArray(filter)
      ? { conditions: filter }
      : FilterUtility.ToDefinition(filter);

    return list.filter((item: T) => FilterUtility.MatchFilter(item, definition));
  }

  /**
   * Check whether an item matches the whole filter.
   * @param item The item to check
   * @param filter A filter root — a group definition or a bare condition —
   * or just the list of members (joined by AND)
   * @returns true if the item matches (an empty definition matches everything)
   */
  public static MatchFilter<T>(item: T, filter: FilterRoot | FilterRoot[]): boolean {
    const definition: IFilterDefinition = Array.isArray(filter)
      ? { conditions: filter }
      : FilterUtility.ToDefinition(filter);

    if (!definition.conditions || definition.conditions.length === 0) {
      return true;
    }

    const joinedByOR = definition.join === FilterJoinType.OR;
    for (const member of definition.conditions) {
      const matched = FilterUtility.IsCondition(member)
        ? FilterUtility.MatchCondition(item, member)
        : FilterUtility.MatchFilter(item, member);
      if (joinedByOR && matched) {
        return true;
      }
      if (!joinedByOR && !matched) {
        return false;
      }
    }

    return !joinedByOR;
  }

  /**
   * Normalize a filter root into the group-definition shape.
   * A bare condition (case 1) becomes the equivalent 1-member group
   * `{ conditions: [c] }`; a definition is returned unchanged.
   * @param filter The filter root
   * @returns The filter as an IFilterDefinition
   */
  public static ToDefinition(filter: FilterRoot): IFilterDefinition {
    return FilterUtility.IsCondition(filter) ? { conditions: [filter] } : filter;
  }

  /**
   * Reduce a filter definition to its minimal root shape (the inverse of
   * **ToDefinition** at the root): a 1-member group becomes its single
   * member — a bare condition in the usual case (the `join` of a 1-member
   * group never affects the result) — while an empty or >= 2-member group
   * is returned unchanged. Only the root is unwrapped, once; nested groups
   * are left as they are, since pruning those is the caller's policy, not
   * the semantics.
   * @param definition The filter definition to simplify
   * @returns The minimal equivalent filter root
   */
  public static Simplify(definition: IFilterDefinition): FilterRoot {
    return definition.conditions && definition.conditions.length === 1
      ? definition.conditions[0]
      : definition;
  }

  /**
   * Check whether an item matches a single filter condition.
   * @param item The item to check
   * @param condition The filter condition
   * @returns true if the item matches the condition
   */
  public static MatchCondition<T>(item: T, condition: IFilterCondition): boolean {
    if (item === null || item === undefined || !condition || !condition.property) {
      return false;
    }

    const rawValue = (item as Record<string, unknown>)[condition.property];

    // Enum validation: property value and all bound values must be enum members
    if (condition.enumValues) {
      if (rawValue === null || rawValue === undefined) {
        return false;
      }
      if (!EnumUtility.IsEnumMember(rawValue, condition.enumValues)) {
        return false;
      }
      // BeginsWith/EndsWith/Contains take a pattern, not an enum value, so
      // only value-based operations must bound-check lowValue
      if (
        condition.operation !== FilterOperation.BeginsWith &&
        condition.operation !== FilterOperation.EndsWith &&
        condition.operation !== FilterOperation.Contains &&
        !EnumUtility.IsEnumMember(condition.lowValue, condition.enumValues)
      ) {
        return false;
      }
      if (
        condition.operation === FilterOperation.Between &&
        !EnumUtility.IsEnumMember(condition.highValue, condition.enumValues)
      ) {
        return false;
      }
    }

    let kind = FilterUtility.DetectKind(rawValue);
    if (kind === 'other') {
      // A missing value is typed by the condition value; anything else never matches
      if (rawValue === null || rawValue === undefined) {
        kind = FilterUtility.DetectKind(condition.lowValue);
      } else {
        return false;
      }
    }

    switch (kind) {
      case 'number':
        return FilterUtility.MatchNumberCondition(rawValue, condition);
      case 'string':
        return FilterUtility.MatchStringCondition(rawValue, condition);
      case 'date':
        return FilterUtility.MatchDateCondition(rawValue, condition);
      default:
        return false;
    }
  }

  /** Tell a leaf condition apart from a nested group. */
  private static IsCondition(member: FilterMember): member is IFilterCondition {
    return typeof (member as IFilterCondition).property === 'string';
  }

  private static DetectKind(value: unknown): ValueKind {
    if (typeof value === 'number') {
      return 'number';
    }
    if (typeof value === 'string') {
      return 'string';
    }
    if (value instanceof Date) {
      return 'date';
    }
    return 'other';
  }

  private static MatchNumberCondition(rawValue: unknown, condition: IFilterCondition): boolean {
    // undefined/null of a number is treated as 0
    const value = typeof rawValue === 'number' ? rawValue : 0;
    if (typeof condition.lowValue !== 'number') {
      return false;
    }

    if (condition.operation === FilterOperation.Between) {
      if (typeof condition.highValue !== 'number') {
        return false;
      }
      return value >= condition.lowValue && value <= condition.highValue;
    }

    switch (condition.operation) {
      case FilterOperation.LessThan:
        return value < condition.lowValue;
      case FilterOperation.LessOrEqual:
        return value <= condition.lowValue;
      case FilterOperation.Equal:
        return value === condition.lowValue;
      case FilterOperation.GreaterOrEqual:
        return value >= condition.lowValue;
      case FilterOperation.GreaterThan:
        return value > condition.lowValue;
      default:
        // BeginsWith / EndsWith / Contains are not allowed on numbers
        return false;
    }
  }

  private static MatchStringCondition(rawValue: unknown, condition: IFilterCondition): boolean {
    const value = typeof rawValue === 'string' ? rawValue : '';
    if (typeof condition.lowValue !== 'string') {
      return false;
    }

    if (condition.operation === FilterOperation.Between) {
      if (typeof condition.highValue !== 'string') {
        return false;
      }
      return value >= condition.lowValue && value <= condition.highValue;
    }

    switch (condition.operation) {
      case FilterOperation.Equal:
        return value === condition.lowValue;
      case FilterOperation.LessThan:
        return value < condition.lowValue;
      case FilterOperation.LessOrEqual:
        return value <= condition.lowValue;
      case FilterOperation.GreaterOrEqual:
        return value >= condition.lowValue;
      case FilterOperation.GreaterThan:
        return value > condition.lowValue;
      case FilterOperation.BeginsWith:
        return value.startsWith(condition.lowValue);
      case FilterOperation.EndsWith:
        return value.endsWith(condition.lowValue);
      case FilterOperation.Contains:
        return value.includes(condition.lowValue);
      default:
        return false;
    }
  }

  private static MatchDateCondition(rawValue: unknown, condition: IFilterCondition): boolean {
    // An item without a date never matches
    if (!(rawValue instanceof Date) || isNaN(rawValue.getTime())) {
      return false;
    }
    if (!(condition.lowValue instanceof Date) || isNaN(condition.lowValue.getTime())) {
      return false;
    }

    const value = rawValue.getTime();
    const low = condition.lowValue.getTime();

    if (condition.operation === FilterOperation.Between) {
      if (!(condition.highValue instanceof Date) || isNaN(condition.highValue.getTime())) {
        return false;
      }
      return value >= low && value <= condition.highValue.getTime();
    }

    switch (condition.operation) {
      case FilterOperation.LessThan:
        return value < low;
      case FilterOperation.LessOrEqual:
        return value <= low;
      case FilterOperation.Equal:
        return value === low;
      case FilterOperation.GreaterOrEqual:
        return value >= low;
      case FilterOperation.GreaterThan:
        return value > low;
      default:
        // BeginsWith / EndsWith / Contains are not allowed on dates
        return false;
    }
  }
}
