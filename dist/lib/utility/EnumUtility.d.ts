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
export declare class EnumUtility {
    /**
     * Enumerate keys
     * @param obj an instance of Enum
     * @returns a result string
     */
    static enumerateKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[];
}
