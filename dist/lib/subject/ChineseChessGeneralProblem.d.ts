/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
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
/**
 * Interface of the position
 */
export interface CGGPPostion {
    PositionA: number;
    PositionB: number;
}
/**
 * Solution to CCGP, approach 2
 */
export declare function CCGP_Solution2(): CGGPPostion[];
/**
 * Solution to CCGP, approach 3
 */
export declare function CCGP_Solution3(): CGGPPostion[];
