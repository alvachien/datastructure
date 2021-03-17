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
    public static enumerateKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
        return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
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

