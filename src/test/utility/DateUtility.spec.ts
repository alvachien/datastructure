/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: DateUtility.spec.ts
 *
 */

import { DateUtility } from '../../lib/utility';

describe('Unit test for DateUtility in Model', () => {

    beforeEach(() => {
      // Do nothing here
    });
  
    it('#1. DateUtility.Date2String()', () => {
      let ndate: Date = new Date(2018, 1, 14);
      expect(DateUtility.Date2String(ndate)).toBe('2018-02-14');
  
      ndate = new Date(2018, 2, 1);
      expect(DateUtility.Date2String(ndate)).toBe('2018-03-01');
  
      ndate = new Date(2058, 10, 1);
      expect(DateUtility.Date2String(ndate)).toBe('2058-11-01');
    });
  
    it('#2. DateUtility.String2Date()', () => {
      const ndate: Date = DateUtility.String2Date('2018-02-14');
      expect(ndate.getFullYear()).toBe(2018);
      expect(ndate.getMonth()).toBe(1);
      expect(ndate.getDate()).toBe(14);
    });
  
    it('#3. DateUtility.getYearMonthDisplayString()', () => {
      const strResult: string = DateUtility.getYearMonthDisplayString(2018, 8);
      expect(strResult).toBe('2018-08');
      const strResult2: string = DateUtility.getYearMonthDisplayString(2018, 11);
      expect(strResult2).toBe('2018-11');
    });
  
    it('#4. DateUtility.DaysBetween', () => {
      const bgndate: Date = new Date(2019, 2, 4);
      const enddate: Date = new Date(2019, 2, 5);
      const ndays = DateUtility.DaysBetween(bgndate, enddate);
      expect(ndays).toBeTruthy();
    });
});
