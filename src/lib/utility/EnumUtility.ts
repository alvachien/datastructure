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

/**
 * A compiled TypeScript enum object, e.g. `Priority` for
 * `enum Priority { Low = 0, High = 10 }`.
 */
export type EnumLike = Record<string, string | number>;

export class EnumUtility {
    /**
     * Enumerate keys
     * @param obj an instance of Enum
     * @returns a result string
     */
    public static enumerateKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
        return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
    }

    /**
     * Collect the member values of a compiled enum object. Numeric enums
     * carry a reverse mapping (keys '0', '5', ...); **enumerateKeys** filters
     * those out, leaving only the declared member names, which are then
     * mapped to their values.
     * @param obj an instance of Enum
     * @returns the list of values the enum members evaluate to
     */
    public static EnumerateValues(obj: EnumLike): Array<string | number> {
        return EnumUtility.enumerateKeys(obj).map((key: string) => obj[key]);
    }

    /**
     * Check whether a value equals one of the enum's member values.
     * @param value the value to check
     * @param obj an instance of Enum
     * @returns true if the value is a member value of the enum
     */
    public static IsEnumMember(value: unknown, obj: EnumLike): boolean {
        if (typeof value !== 'number' && typeof value !== 'string') {
            return false;
        }
        return EnumUtility.EnumerateValues(obj).includes(value);
    }

    // /**
    //  * Enumerate value
    //  * @param obj an instance of Enum - shall not be string
    //  * @returns a result string
    //  */
    //  public static enumerateValues<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    //     return Object.keys(obj).filter(k => !Number.isNaN(+k)) as K[];
    // }
}

