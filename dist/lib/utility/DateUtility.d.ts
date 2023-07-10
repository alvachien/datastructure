/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: DateUtility.ts
 *
 */
export declare class DateUtility {
    /**
     * Convert date to string
     * @param dt an instance of Date
     * @returns a result string
     */
    static Date2String(dt: Date, dateSplitChar?: string): string;
    /**
     * Parse string to Date
     * @param s string to parse
     * @returns a new Date
     */
    static String2Date(s: string, dateSplitChar?: string): Date;
    /**
     * Workout the distance between two days
     * @param first First date
     * @param second Second date
     * @returns number between two days
     */
    static DaysBetween(first: Date, second: Date): number;
    /**
     * Get display string for Year/Month
     * @param y Year
     * @param m Month
     * @returns a string
     * Example:
     * @example Input: y=2018,m=8; Output: 2018-08
     * @example Input: y=2018,m=11, Output: 2018-11
     */
    static getYearMonthDisplayString(y: number, m: number, dateSplitChar?: string): string;
}
