"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Element.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtility_1 = require("../../lib/utility/DateUtility");
describe('Unit test for DateUtility in Model', function () {
    beforeEach(function () {
        // Do nothing here
    });
    it('#1. DateUtility.Date2String()', function () {
        var ndate = new Date(2018, 1, 14);
        expect(DateUtility_1.DateUtility.Date2String(ndate)).toBe('2018-02-14');
        ndate = new Date(2018, 2, 1);
        expect(DateUtility_1.DateUtility.Date2String(ndate)).toBe('2018-03-01');
        ndate = new Date(2058, 10, 1);
        expect(DateUtility_1.DateUtility.Date2String(ndate)).toBe('2058-11-01');
    });
    it('#2. DateUtility.String2Date()', function () {
        var ndate = DateUtility_1.DateUtility.String2Date('2018-02-14');
        expect(ndate.getFullYear()).toBe(2018);
        expect(ndate.getMonth()).toBe(1);
        expect(ndate.getDate()).toBe(14);
    });
    it('#3. DateUtility.getYearMonthDisplayString()', function () {
        var strResult = DateUtility_1.DateUtility.getYearMonthDisplayString(2018, 8);
        expect(strResult).toBe('2018-08');
        var strResult2 = DateUtility_1.DateUtility.getYearMonthDisplayString(2018, 11);
        expect(strResult2).toBe('2018-11');
    });
    it('#4. DateUtility.DaysBetween', function () {
        var bgndate = new Date(2019, 2, 4);
        var enddate = new Date(2019, 2, 5);
        var ndays = DateUtility_1.DateUtility.DaysBetween(bgndate, enddate);
        expect(ndays).toBeTruthy();
    });
});
//# sourceMappingURL=DateUtility.spec.js.map