/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StringUtility.ts
 *
 */
export declare class StringUtility {
    /**
     * Check the length of string
     * @param strField String to be checked
     * @param minlength Min. length allowed
     * @param maxLength Max. length allowed
     * @returns true if the string meet the length check
     */
    static CheckStringLength(strField: string, minlength: number, maxLength: number): boolean;
    /**
     * Get strength level of a password
     * @param strField Password to be check
     * @returns number of level
     */
    static GetPasswordStrengthLevel(strField: string): number;
    /**
     * Check duplicated entries in an array
     * @param strarray Array to be check
     * @returns true indicates duplicated entries exist
     */
    static hasDuplicatesInStringArray(strarray: string): boolean;
}
