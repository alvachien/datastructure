"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCGP_Solution3 = exports.CCGP_Solution2 = void 0;
/**
 * Solution to CCGP, approach 2
 */
function CCGP_Solution2() {
    var total = 81;
    var rst = [];
    while (total--) {
        if (total / 9 % 3 === total % 9 / 3) {
            continue;
        }
        // rst.push(`A = ${total / 9 + 1}, B = ${total % 9 + 1}`);
        rst.push({ PositionA: total / 9 + 1, PositionB: total % 9 + 1 });
    }
    return rst;
}
exports.CCGP_Solution2 = CCGP_Solution2;
/**
 * Solution to CCGP, approach 3
 */
function CCGP_Solution3() {
    var rst = [];
    for (var a = 1; a <= 9; a++) {
        for (var b = 1; b <= 9; b++) {
            if (a % 3 !== b % 3) {
                // rst.push(`A = ${a}, B = ${b}`);
                rst.push({ PositionA: a, PositionB: b });
            }
        }
    }
    return rst;
}
exports.CCGP_Solution3 = CCGP_Solution3;
//# sourceMappingURL=ChineseChessGeneralProblem.js.map