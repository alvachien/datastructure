/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: ChineseChessGeneralProblem.spec.ts
 * Chinese Chess General Problem
 *
 */

import { CCGP_Solution2, CCGP_Solution3 } from '../../lib/subject/ChineseChessGeneralProblem';

describe('Test ChineseChessGeneralProblem', () => {

  beforeEach(() => {
    // Do nothing
  });

  it("#1. Check CCGP_Solution2()", () => {
    let arstrs = CCGP_Solution2();

    expect(arstrs.length > 0).toBe(true);
  });

  it("#2. Check CCGP_Solution3()", () => {
    let arstrs = CCGP_Solution3();

    expect(arstrs.length).toBe(54);
  });
});
