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
import { EnumLike } from './EnumUtility';
/**
 * The way multiple filter conditions are connected together.
 */
export declare enum FilterJoinType {
    AND = "AND",
    OR = "OR"
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
export declare enum FilterOperation {
    LessThan = "<",
    LessOrEqual = "<=",
    Equal = "=",
    GreaterOrEqual = ">=",
    GreaterThan = ">",
    Between = "Between",
    BeginsWith = "BeginsWith",
    EndsWith = "EndsWith",
    Contains = "Contains"
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
 * Utility for filtering over a list of items.
 *
 * A filter is a search with a strict definition: it consists of conditions
 * joined by AND / OR, possibly nested to arbitrary depth (each nested
 * IFilterDefinition acts like a parenthesized group). Each condition
 * specifies a property, an operation and the value(s) to compare against.
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
export declare class FilterUtility {
    /**
     * Filter a list of items with the given filter definition.
     * @param list The list to filter
     * @param filter A filter definition, or just the list of members (joined by AND)
     * @returns A new array holding all items that match the filter
     */
    static FilterList<T>(list: T[], filter: IFilterDefinition | IFilterCondition[]): T[];
    /**
     * Check whether an item matches the whole filter definition.
     * @param item The item to check
     * @param filter The filter definition
     * @returns true if the item matches (an empty definition matches everything)
     */
    static MatchFilter<T>(item: T, filter: IFilterDefinition | IFilterCondition[]): boolean;
    /**
     * Check whether an item matches a single filter condition.
     * @param item The item to check
     * @param condition The filter condition
     * @returns true if the item matches the condition
     */
    static MatchCondition<T>(item: T, condition: IFilterCondition): boolean;
    /** Tell a leaf condition apart from a nested group. */
    private static IsCondition;
    private static DetectKind;
    private static MatchNumberCondition;
    private static MatchStringCondition;
    private static MatchDateCondition;
}
