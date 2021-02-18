/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Finance.spec.ts
 * 
 * Finance methods
 * 
 */

import { FinanceMethods } from '../../lib/subject';

describe('Test FinanceMethods', () => {

    beforeEach(() => {
    });

    it("#1. FV()", () => {
        const rst = FinanceMethods.FV(100, 0.01, 12);
        expect(rst).toEqual(112.68);
    });

    it("#2. PV()", () => {
        const rst = FinanceMethods.PV(112.68, 0.01, 12, 2);
        expect(rst).toEqual(100.00);
    });
});
