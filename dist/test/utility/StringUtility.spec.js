/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StringUtility.spec.ts
 *
 */
import { StringUtility } from '../../lib/utility';
describe('Unit test for StringUtility in Model', () => {
    it('#1. GetPasswordStrengthLevel', () => {
        const str = 'ABCdab_123';
        let nrst = StringUtility.GetPasswordStrengthLevel(str);
        expect(nrst).toBeTruthy();
        nrst = StringUtility.GetPasswordStrengthLevel('1234');
        expect(nrst).toEqual(0);
    });
    it('#7. CheckStringLength', () => {
        const str = 'adsaf';
        expect(StringUtility.CheckStringLength(str, 3, 15)).toBeTrue();
        expect(StringUtility.CheckStringLength(str, 1, 3)).toBeFalse();
    });
    xit('#8. hasDuplicatesInStringArray', () => {
        expect(StringUtility.hasDuplicatesInStringArray('adsdae')).toBeTrue();
        expect(StringUtility.hasDuplicatesInStringArray('abcewf')).toBeFalse();
    });
});
//# sourceMappingURL=StringUtility.spec.js.map