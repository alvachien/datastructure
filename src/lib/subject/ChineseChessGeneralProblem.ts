/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: ChineseChessGeneralProblem.ts
 * Chinese Chess General Problem
 *
 */

 /**
  * Desp:
  *
  */
export function CCGP_Solution2(): string[] {
    let total = 81;
    const rst: string[] = [];

    while (total--) {
        if (total / 9 % 3 === total % 9 / 3) {
            continue;
        }

        rst.push(`A = ${ total / 9 + 1 }, B = ${ total % 9 + 1 }`);
    }

    return rst;
}

export function CCGP_Solution3(): string[] {
    const rst: string[] = [];
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            if (a % 3 === b % 3) {
                rst.push(`A = ${ a }, B = ${ b}`);
            }
        }
    }
    return rst;
}
