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
  enum ExerciseItemType {
    Question = 0,
    SingleChoice = 1,
    MultipleChoice = 2,
    ShortAnswer = 3,
    EssayQuestions = 4,
  }

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
