/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: ChineseChessGeneralProblem.ts
 * Chinese Chess General Problem
 *
 */

/**
 * Context:
 * There is a simple run in Chinese chess: the General (or kings) cannot in the same line.
 *
 * There are several solutions provided via functions.
 *
 * Position of King:
 * -----------------------------
 * |  1  2  3  |
 * |  4  5  6  |
 * |  7  8  9  |
 *
 * |  1  2  3  |
 * |  4  5  6  |
 * |  7  8  9  |
 * -----------------------------
 */

export interface CGGPPostion {
  PositionA: number;
  PositionB: number;
}

export function CCGP_Solution2(): CGGPPostion[] {
  let total = 81;
  const rst: CGGPPostion[] = [];

  while (total--) {
    if (total / 9 % 3 === total % 9 / 3) {
      continue;
    }

    // rst.push(`A = ${total / 9 + 1}, B = ${total % 9 + 1}`);
    rst.push({PositionA: total / 9 + 1, PositionB: total % 9 + 1});
  }

  return rst;
}

export function CCGP_Solution3(): CGGPPostion[] {
  const rst: CGGPPostion[] = [];

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      if (a % 3 !== b % 3) {
        // rst.push(`A = ${a}, B = ${b}`);
        rst.push({PositionA: a, PositionB: b});
      }
    }
  }

  return rst;
}
