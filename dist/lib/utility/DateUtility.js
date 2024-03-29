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
export class DateUtility {
    /**
     * Convert date to string
     * @param dt an instance of Date
     * @returns a result string
     */
    static Date2String(dt, dateSplitChar = '-') {
        // From: http://stackoverflow.com/questions/1056728/where-can-i-find-documentation-on-formatting-a-date-in-javascript
        // let curr_date : string = dt.getDate().toString();
        // let curr_month : string = (dt.getMonth() + 1).toString(); //Months are zero based
        // let curr_year : string = dt.getFullYear().toString();
        // return (curr_date + "-" + curr_month + "-" + curr_year);
        const y = dt.getFullYear();
        const m = dt.getMonth() + 1;
        const d = dt.getDate();
        return y.toString() + dateSplitChar + (m < 10 ? ('0' + m) : m).toString() + dateSplitChar + (d < 10 ? ('0' + d) : d).toString();
    }
    /**
     * Parse string to Date
     * @param s string to parse
     * @returns a new Date
     */
    static String2Date(s, dateSplitChar = '-') {
        if (!s) {
            return new Date();
        }
        const ss = (s.split(dateSplitChar));
        const y = parseInt(ss[0], 10);
        const m = parseInt(ss[1], 10);
        const d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        }
        else {
            return new Date();
        }
    }
    /**
     * Workout the distance between two days
     * @param first First date
     * @param second Second date
     * @returns number between two days
     */
    static DaysBetween(first, second) {
        // Copy date parts of the timestamps, discarding the time parts.
        const one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
        const two = new Date(second.getFullYear(), second.getMonth(), second.getDate());
        // Do the math.
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const millisBetween = two.getTime() - one.getTime();
        const days = millisBetween / millisecondsPerDay;
        // Round down.
        return Math.floor(days);
    }
    /**
     * Get display string for Year/Month
     * @param y Year
     * @param m Month
     * @returns a string
     * Example:
     * @example Input: y=2018,m=8; Output: 2018-08
     * @example Input: y=2018,m=11, Output: 2018-11
     */
    static getYearMonthDisplayString(y, m, dateSplitChar = '-') {
        return y.toString() + dateSplitChar + (m < 10 ? ('0' + m) : m).toString();
    }
}
//# sourceMappingURL=DateUtility.js.map