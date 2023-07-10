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
    it("#1. Further Value", () => {
        const rst = FinanceMethods.FV(100, 0.01, 12);
        expect(rst).toEqual(112.68);
    });
    it("#2. Present Value", () => {
        const rst = FinanceMethods.PV(112.69, 0.01, 12, 2);
        expect(rst).toEqual(100.00);
    });
    /**
     * PVA Example 1. 5 years annity, A=100, rate=10%
     */
    it("#3. Present Value Of Ordinary Annity, 1", () => {
        const rst = FinanceMethods.PVofOrdinaryAnnity(100, 0.1, 5, 2);
        expect(rst).toEqual(379.10);
    });
    /**
     * PVA Example 2. 10 years annity, A=40000, rate=6%
     */
    it("#4. Present Value Of Ordinary Annity, 2", () => {
        const rst = FinanceMethods.PVofOrdinaryAnnity(40000, 0.06, 10, 2);
        expect(rst).toEqual(294403.48);
    });
    /**
     * PVA Example 3. 6 years annity in advance, A=10, rate=5%
     */
    xit("#5. Present Value Of Annity in advance", () => {
        const rst = FinanceMethods.PVofAnnityInAdvance(10, 0.05, 6, 2);
        expect(rst).toEqual(53.29);
    });
    /**
     * PVA Example 4. 6 years deferred annity (deferred 3 years), A=100000, rate=4%
     */
    it("#6. Present Value Of Annity in advance", () => {
        const rst = FinanceMethods.PVofDeferredAnnity(10, 0.04, 6, 3, 2);
        expect(rst).toEqual(46.58);
    });
});
//# sourceMappingURL=FinanceMethods.spec.js.map