"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ChineseChessGeneralProblem_1 = require("../../lib/subject/ChineseChessGeneralProblem");
describe('Test ChineseChessGeneralProblem', function () {
    beforeEach(function () {
        // Do nothing
    });
    it("#1. Check CCGP_Solution2()", function () {
        var arstrs = ChineseChessGeneralProblem_1.CCGP_Solution2();
        expect(arstrs.length).toBe(54);
    });
    it("#2. Check CCGP_Solution3()", function () {
        var arstrs = ChineseChessGeneralProblem_1.CCGP_Solution3();
        expect(arstrs.length).toBe(54);
    });
});
//# sourceMappingURL=ChineseChessGeneralProblem.spec.js.map