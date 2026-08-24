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
    it('#8. hasDuplicatesInStringArray detects array duplicates', () => {
        // No duplicates
        expect(StringUtility.hasDuplicatesInStringArray(['a', 'b', 'c'])).toBeFalse();
        expect(StringUtility.hasDuplicatesInStringArray([])).toBeFalse();
        expect(StringUtility.hasDuplicatesInStringArray(['solo'])).toBeFalse();
        // Duplicates present
        expect(StringUtility.hasDuplicatesInStringArray(['a', 'b', 'a'])).toBeTrue();
        expect(StringUtility.hasDuplicatesInStringArray(['dup', 'dup'])).toBeTrue();
        // First-position duplicate (guard catches on second occurrence)
        expect(StringUtility.hasDuplicatesInStringArray(['x', 'x', 'y'])).toBeTrue();
        // Last-position duplicate
        expect(StringUtility.hasDuplicatesInStringArray(['y', 'z', 'z'])).toBeTrue();
    });
});
//# sourceMappingURL=StringUtility.spec.js.map