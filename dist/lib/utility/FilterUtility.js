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
import { EnumUtility } from './EnumUtility';
/**
 * The way multiple filter conditions are connected together.
 */
export var FilterJoinType;
(function (FilterJoinType) {
    FilterJoinType["AND"] = "AND";
    FilterJoinType["OR"] = "OR";
})(FilterJoinType || (FilterJoinType = {}));
/**
 * All operations allowed in a filter condition.
 *
 * - For number properties: LessThan, LessOrEqual, Equal, GreaterOrEqual, GreaterThan, Between
 * - For date properties: same as number
 * - For string properties: all of the above plus BeginsWith, EndsWith, Contains (substring)
 * - For array properties (number[], string[], Date[]): Contains (strict
 *   element membership) and NotContains; string[] additionally supports
 *   AnyContains / AnyNotContains (substring match against any element)
 *
 * Only Between examines both `lowValue` and `highValue`; every other
 * operation compares against `lowValue` alone.
 */
export var FilterOperation;
(function (FilterOperation) {
    FilterOperation["LessThan"] = "<";
    FilterOperation["LessOrEqual"] = "<=";
    FilterOperation["Equal"] = "=";
    FilterOperation["GreaterOrEqual"] = ">=";
    FilterOperation["GreaterThan"] = ">";
    FilterOperation["Between"] = "Between";
    FilterOperation["BeginsWith"] = "BeginsWith";
    FilterOperation["EndsWith"] = "EndsWith";
    FilterOperation["Contains"] = "Contains";
    FilterOperation["NotContains"] = "NotContains";
    FilterOperation["AnyContains"] = "AnyContains";
    FilterOperation["AnyNotContains"] = "AnyNotContains";
})(FilterOperation || (FilterOperation = {}));
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
 * - The property kind (number / string / date / array) is detected from the
 *   runtime value of the property; a missing (null/undefined) property is typed by
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
 * - Array properties (number[], string[] or Date[]) support Contains and
 *   NotContains: lowValue is the element to look for, and every
 *   element must be of the same kind as lowValue (a mixed-kind or
 *   different-kind non-empty array never matches). An empty array — or a
 *   missing property under NotContains — contains nothing: Contains is
 *   false and NotContains true for any target kind. Dates compare by
 *   time, strings case-sensitively. Contains on a missing property keeps
 *   the missing-value rule above.
 * - string[] properties additionally support AnyContains / AnyNotContains:
 *   lowValue is a substring pattern, and AnyContains matches when ANY
 *   element contains it (AnyNotContains when NO element does). The array
 *   must be all-string and lowValue a string; an empty array — or a missing
 *   property under AnyNotContains — matches AnyNotContains only. These two
 *   are array-only: on a scalar property they never match.
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
    static FilterList(list, filter) {
        const definition = Array.isArray(filter)
            ? { conditions: filter }
            : FilterUtility.ToDefinition(filter);
        return list.filter((item) => FilterUtility.MatchFilter(item, definition));
    }
    /**
     * Check whether an item matches the whole filter.
     * @param item The item to check
     * @param filter A filter root — a group definition or a bare condition —
     * or just the list of members (joined by AND)
     * @returns true if the item matches (an empty definition matches everything)
     */
    static MatchFilter(item, filter) {
        const definition = Array.isArray(filter)
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
    static ToDefinition(filter) {
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
    static Simplify(definition) {
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
    static MatchCondition(item, condition) {
        if (item === null || item === undefined || !condition || !condition.property) {
            return false;
        }
        const rawValue = item[condition.property];
        // Enum validation: property value and all bound values must be enum members
        const enumValues = condition.enumValues;
        if (enumValues) {
            if (rawValue === null || rawValue === undefined) {
                return false;
            }
            if (Array.isArray(rawValue)) {
                // Array property: every element must be a member, and so must
                // lowValue — array Contains/NotContains compare values, not patterns.
                // AnyContains/AnyNotContains take a substring pattern, so only the
                // elements are bound-checked.
                if (!rawValue.every((element) => EnumUtility.IsEnumMember(element, enumValues))) {
                    return false;
                }
                if (condition.operation !== FilterOperation.AnyContains &&
                    condition.operation !== FilterOperation.AnyNotContains &&
                    !EnumUtility.IsEnumMember(condition.lowValue, enumValues)) {
                    return false;
                }
            }
            else {
                if (!EnumUtility.IsEnumMember(rawValue, enumValues)) {
                    return false;
                }
                // BeginsWith/EndsWith/Contains take a pattern, not an enum value, so
                // only value-based operations must bound-check lowValue
                if (condition.operation !== FilterOperation.BeginsWith &&
                    condition.operation !== FilterOperation.EndsWith &&
                    condition.operation !== FilterOperation.Contains &&
                    !EnumUtility.IsEnumMember(condition.lowValue, enumValues)) {
                    return false;
                }
                if (condition.operation === FilterOperation.Between &&
                    !EnumUtility.IsEnumMember(condition.highValue, enumValues)) {
                    return false;
                }
            }
        }
        let kind = FilterUtility.DetectKind(rawValue);
        if (kind === 'other') {
            // A missing value is typed by the condition value; anything else never matches
            if (rawValue === null || rawValue === undefined) {
                // NotContains / AnyNotContains are array-only: a missing property
                // acts as an empty array
                if (condition.operation === FilterOperation.NotContains ||
                    condition.operation === FilterOperation.AnyNotContains) {
                    return FilterUtility.MatchArrayCondition([], condition);
                }
                kind = FilterUtility.DetectKind(condition.lowValue);
            }
            else {
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
            case 'array':
                return FilterUtility.MatchArrayCondition(rawValue, condition);
            default:
                return false;
        }
    }
    /** Tell a leaf condition apart from a nested group. */
    static IsCondition(member) {
        return typeof member.property === 'string';
    }
    static DetectKind(value) {
        if (typeof value === 'number') {
            return 'number';
        }
        if (typeof value === 'string') {
            return 'string';
        }
        if (value instanceof Date) {
            return 'date';
        }
        if (Array.isArray(value)) {
            return 'array';
        }
        return 'other';
    }
    static MatchNumberCondition(rawValue, condition) {
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
    static MatchStringCondition(rawValue, condition) {
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
    static MatchDateCondition(rawValue, condition) {
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
    static MatchArrayCondition(rawValue, condition) {
        // Arrays support Contains / NotContains (strict element membership) and,
        // for string[] only, AnyContains / AnyNotContains (substring per element)
        const operation = condition.operation;
        const isAny = operation === FilterOperation.AnyContains || operation === FilterOperation.AnyNotContains;
        if (operation !== FilterOperation.Contains &&
            operation !== FilterOperation.NotContains &&
            !isAny) {
            return false;
        }
        // lowValue is the element to look for: a single number, string or Date;
        // for AnyContains / AnyNotContains it is a substring pattern (string only)
        const target = condition.lowValue;
        const targetKind = FilterUtility.DetectKind(target);
        if (targetKind !== 'number' && targetKind !== 'string' && targetKind !== 'date') {
            return false;
        }
        if (isAny && targetKind !== 'string') {
            return false;
        }
        if (targetKind === 'date' && isNaN(target.getTime())) {
            return false;
        }
        // A non-empty array must be of the target's kind: number[], string[] or
        // Date[]; a mixed-kind or different-kind array never matches. An empty
        // array qualifies for any kind — it contains nothing, so Contains /
        // AnyContains are false and NotContains / AnyNotContains true.
        if (!rawValue.every((element) => FilterUtility.DetectKind(element) === targetKind)) {
            return false;
        }
        let contains;
        if (isAny) {
            const pattern = target;
            contains = rawValue.some((element) => element.includes(pattern));
        }
        else if (targetKind === 'date') {
            const targetTime = target.getTime();
            contains = rawValue.some((element) => {
                const elementTime = element.getTime();
                return !isNaN(elementTime) && elementTime === targetTime;
            });
        }
        else {
            contains = rawValue.some((element) => element === target);
        }
        return operation === FilterOperation.Contains || operation === FilterOperation.AnyContains
            ? contains
            : !contains;
    }
}
//# sourceMappingURL=FilterUtility.js.map