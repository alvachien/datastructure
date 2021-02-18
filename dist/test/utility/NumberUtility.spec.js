/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: NumberUtility.spec.ts
 *
 */
import { NumberUtility } from '../../lib/utility';
describe('Unit test for NumberUtility in Model', () => {
    it('#1. prefixInteger', () => {
        expect(NumberUtility.prefixInteger(2, 3)).toEqual('002');
    });
    it('#2. Round2Two', () => {
        expect(NumberUtility.Round2Two(2)).toEqual(2.00);
    });
    it('#3. Round2Any 1', () => {
        expect(NumberUtility.Round2Any(2, 2)).toEqual(2.00);
    });
    it('#4. Round2Any 2', () => {
        expect(NumberUtility.Round2Any(2.2342, 3)).toEqual(2.234);
    });
    it('#5. Round2Any 3', () => {
        expect(NumberUtility.Round2Any(2.2342, 1)).toEqual(2.2);
    });
});
//# sourceMappingURL=NumberUtility.spec.js.map