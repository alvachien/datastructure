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
    let TaskStatus;
    (function (TaskStatus) {
        TaskStatus["Open"] = "OPEN";
        TaskStatus["InProgress"] = "IN_PROGRESS";
        TaskStatus["Done"] = "DONE";
    })(TaskStatus || (TaskStatus = {}));
    it('EnumerateValues', () => {
        // numeric enum: reverse-mapped keys are filtered out
        expect(EnumUtility.EnumerateValues(ExerciseItemType)).toEqual([0, 1, 2, 3, 4]);
        // string enum: member values in declaration order
        expect(EnumUtility.EnumerateValues(TaskStatus)).toEqual(['OPEN', 'IN_PROGRESS', 'DONE']);
    });
    it('IsEnumMember', () => {
        expect(EnumUtility.IsEnumMember(2, ExerciseItemType)).toBeTrue();
        expect(EnumUtility.IsEnumMember(7, ExerciseItemType)).toBeFalse();
        expect(EnumUtility.IsEnumMember('Question', ExerciseItemType)).toBeFalse(); // name is not a value
        expect(EnumUtility.IsEnumMember('OPEN', TaskStatus)).toBeTrue();
        expect(EnumUtility.IsEnumMember('Open', TaskStatus)).toBeFalse();
        expect(EnumUtility.IsEnumMember(undefined, TaskStatus)).toBeFalse();
    });
});
//# sourceMappingURL=EnumUtility.spec.js.map