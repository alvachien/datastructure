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
 * - For string properties: all of the above plus BeginsWith, EndsWith, Contains
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
})(FilterOperation || (FilterOperation = {}));
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
export class FilterUtility {
    /**
     * Filter a list of items with the given filter definition.
     * @param list The list to filter
     * @param filter A filter definition, or just the list of members (joined by AND)
     * @returns A new array holding all items that match the filter
     */
    static FilterList(list, filter) {
        const definition = Array.isArray(filter) ? { conditions: filter } : filter;
        return list.filter((item) => FilterUtility.MatchFilter(item, definition));
    }
    /**
     * Check whether an item matches the whole filter definition.
     * @param item The item to check
     * @param filter The filter definition
     * @returns true if the item matches (an empty definition matches everything)
     */
    static MatchFilter(item, filter) {
        const definition = Array.isArray(filter) ? { conditions: filter } : filter;
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
        if (condition.enumValues) {
            if (rawValue === null || rawValue === undefined) {
                return false;
            }
            if (!EnumUtility.IsEnumMember(rawValue, condition.enumValues)) {
                return false;
            }
            // BeginsWith/EndsWith/Contains take a pattern, not an enum value, so
            // only value-based operations must bound-check lowValue
            if (condition.operation !== FilterOperation.BeginsWith &&
                condition.operation !== FilterOperation.EndsWith &&
                condition.operation !== FilterOperation.Contains &&
                !EnumUtility.IsEnumMember(condition.lowValue, condition.enumValues)) {
                return false;
            }
            if (condition.operation === FilterOperation.Between &&
                !EnumUtility.IsEnumMember(condition.highValue, condition.enumValues)) {
                return false;
            }
        }
        let kind = FilterUtility.DetectKind(rawValue);
        if (kind === 'other') {
            // A missing value is typed by the condition value; anything else never matches
            if (rawValue === null || rawValue === undefined) {
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
}
//# sourceMappingURL=FilterUtility.js.map