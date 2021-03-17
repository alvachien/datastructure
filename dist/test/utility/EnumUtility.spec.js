/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: EnumUtility.spec.ts
 *
 */
import { EnumUtility } from '../../lib/utility';
describe('Unit test for EnumUtility in Model', () => {
    let ExerciseItemType;
    (function (ExerciseItemType) {
        ExerciseItemType[ExerciseItemType["Question"] = 0] = "Question";
        ExerciseItemType[ExerciseItemType["SingleChoice"] = 1] = "SingleChoice";
        ExerciseItemType[ExerciseItemType["MultipleChoice"] = 2] = "MultipleChoice";
        ExerciseItemType[ExerciseItemType["ShortAnswer"] = 3] = "ShortAnswer";
        ExerciseItemType[ExerciseItemType["EssayQuestions"] = 4] = "EssayQuestions";
    })(ExerciseItemType || (ExerciseItemType = {}));
    beforeEach(() => {
        // Do nothing here
    });
    it('enumateKeys', () => {
        const arst = EnumUtility.enumerateKeys(ExerciseItemType);
        expect(arst.findIndex(val => val === 'Question')).not.toEqual(-1);
        expect(arst.findIndex(val => val === 'SingleChoice')).not.toEqual(-1);
        expect(arst.findIndex(val => val === 'MultipleChoice')).not.toEqual(-1);
        expect(arst.findIndex(val => val === 'ShortAnswer')).not.toEqual(-1);
        expect(arst.findIndex(val => val === 'EssayQuestions')).not.toEqual(-1);
    });
});
//# sourceMappingURL=EnumUtility.spec.js.map