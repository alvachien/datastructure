"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FakedGuid.spec.ts
 * Fake Guid
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var FakedGuid_1 = require("../../lib/model/FakedGuid");
describe('Test BinarySearchTree', function () {
    beforeEach(function () {
    });
    it('#1. Test creation', function () {
        var nid = FakedGuid_1.FakedGuid.newGuid();
        expect(nid).toBeTruthy();
        var nid2 = FakedGuid_1.FakedGuid.newGuid();
        expect(nid2).toBeTruthy();
    });
});
//# sourceMappingURL=FakedGuid.spec.js.map