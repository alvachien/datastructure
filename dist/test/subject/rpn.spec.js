"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: rpn.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rpn_1 = require("../../lib/subject/rpn");
describe('Test rpn', function () {
    beforeEach(function () {
    });
    it("#1. Check rpn1, part I", function () {
        var rst = rpn_1.rpn1('12+');
        expect(rst).toBe(3);
        rst = rpn_1.rpn1('92-');
        expect(rst).toBe(7);
    });
    it("#2. Check rpn1, part II", function () {
        var rst = rpn_1.rpn1('12+');
        expect(rst).toBe(3);
        rst = rpn_1.rpn1('92-');
        expect(rst).toBe(7);
    });
});
//# sourceMappingURL=rpn.spec.js.map