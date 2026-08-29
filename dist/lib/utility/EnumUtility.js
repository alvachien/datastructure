/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: EnumUtility.ts
 *
 */
export class EnumUtility {
    /**
     * Enumerate keys
     * @param obj an instance of Enum
     * @returns a result string
     */
    static enumerateKeys(obj) {
        return Object.keys(obj).filter(k => Number.isNaN(+k));
    }
    /**
     * Collect the member values of a compiled enum object. Numeric enums
     * carry a reverse mapping (keys '0', '5', ...); **enumerateKeys** filters
     * those out, leaving only the declared member names, which are then
     * mapped to their values.
     * @param obj an instance of Enum
     * @returns the list of values the enum members evaluate to
     */
    static EnumerateValues(obj) {
        return EnumUtility.enumerateKeys(obj).map((key) => obj[key]);
    }
    /**
     * Check whether a value equals one of the enum's member values.
     * @param value the value to check
     * @param obj an instance of Enum
     * @returns true if the value is a member value of the enum
     */
    static IsEnumMember(value, obj) {
        if (typeof value !== 'number' && typeof value !== 'string') {
            return false;
        }
        return EnumUtility.EnumerateValues(obj).includes(value);
    }
}
//# sourceMappingURL=EnumUtility.js.map