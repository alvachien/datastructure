"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BaseConverter.spec.ts
 * Base convert
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BaseConverter_1 = require("../../lib/subject/BaseConverter");
describe('Test baseConverter', function () {
    beforeEach(function () {
        // Do nothing
    });
    it("#1. 10 => 2()", function () {
        var rst = BaseConverter_1.baseConverter(10, BaseConverter_1.NumberBaseEnum.binary);
        expect(rst).toBe('1010');
        rst = BaseConverter_1.baseConverter(233, 2);
        expect(rst).toBe('11101001');
    });
    it("#2. 10 => 8", function () {
        var rst = BaseConverter_1.baseConverter(100345, BaseConverter_1.NumberBaseEnum.octal);
        expect(rst).toBe('303771');
    });
    it("#3. 10 => 16", function () {
        var rst = BaseConverter_1.baseConverter(100345, BaseConverter_1.NumberBaseEnum.hexadecimal);
        expect(rst).toBe('187F9');
    });
});
//# sourceMappingURL=BaseConverter.spec.js.map