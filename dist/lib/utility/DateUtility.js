"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtility = void 0;
/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: UIUtility.ts
 *
 */
var DateUtility = /** @class */ (function () {
    function DateUtility() {
    }
    /**
     * Convert date to string
     * @param dt an instance of Date
     * @returns a result string
     */
    DateUtility.Date2String = function (dt, dateSplitChar) {
        // From: http://stackoverflow.com/questions/1056728/where-can-i-find-documentation-on-formatting-a-date-in-javascript
        // let curr_date : string = dt.getDate().toString();
        // let curr_month : string = (dt.getMonth() + 1).toString(); //Months are zero based
        // let curr_year : string = dt.getFullYear().toString();
        // return (curr_date + "-" + curr_month + "-" + curr_year);
        if (dateSplitChar === void 0) { dateSplitChar = '-'; }
        var y = dt.getFullYear();
        var m = dt.getMonth() + 1;
        var d = dt.getDate();
        return y.toString() + dateSplitChar + (m < 10 ? ('0' + m) : m).toString() + dateSplitChar + (d < 10 ? ('0' + d) : d).toString();
    };
    /**
     * Parse string to Date
     * @param s string to parse
     * @returns a new Date
     */
    DateUtility.String2Date = function (s, dateSplitChar) {
        if (dateSplitChar === void 0) { dateSplitChar = '-'; }
        if (!s) {
            return new Date();
        }
        var ss = (s.split(dateSplitChar));
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        }
        else {
            return new Date();
        }
    };
    /**
     * Workout the distance between two days
     * @param first First date
     * @param second Second date
     * @returns number between two days
     */
    DateUtility.DaysBetween = function (first, second) {
        // Copy date parts of the timestamps, discarding the time parts.
        var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
        var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());
        // Do the math.
        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var millisBetween = two.getTime() - one.getTime();
        var days = millisBetween / millisecondsPerDay;
        // Round down.
        return Math.floor(days);
    };
    /**
     * Get display string for Year/Month
     * @param y Year
     * @param m Month
     * @returns a string
     * Example:
     * @example Input: y=2018,m=8; Output: 2018-08
     * @example Input: y=2018,m=11, Output: 2018-11
     */
    DateUtility.getYearMonthDisplayString = function (y, m, dateSplitChar) {
        if (dateSplitChar === void 0) { dateSplitChar = '-'; }
        return y.toString() + dateSplitChar + (m < 10 ? ('0' + m) : m).toString();
    };
    return DateUtility;
}());
exports.DateUtility = DateUtility;
//# sourceMappingURL=DateUtility.js.map