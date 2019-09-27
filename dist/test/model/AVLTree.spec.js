"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: AVLTree.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AVLTree_1 = require("../../lib/model/AVLTree");
describe('Test AVLTree', function () {
    var _avlTree;
    beforeEach(function () {
        _avlTree = new AVLTree_1.AVLTree();
    });
    it('#1. Test creation', function () {
        expect(_avlTree).toBeTruthy();
    });
});
//# sourceMappingURL=AVLTree.spec.js.map