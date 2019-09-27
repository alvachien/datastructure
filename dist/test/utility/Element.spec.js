"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Element.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Element_1 = require("../../lib/utility/Element");
describe('Test Utility Text', function () {
    beforeEach(function () {
    });
    it("#1. Check replaceChar160ToSpace", function () {
        var rst = Element_1.replaceChar160ToSpace('92-');
        expect(rst).toBe('92-');
        rst = Element_1.replaceChar160ToSpace('');
        expect(rst).toBe('');
        rst = Element_1.replaceChar160ToSpace("\u00A0");
        expect(rst).toBe(' ');
    });
});
//# sourceMappingURL=Element.spec.js.map