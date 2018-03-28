"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearchTree_1 = require("../../lib/model/BinarySearchTree");
describe('Test BinarySearchTree', function () {
    var _bsTree;
    beforeEach(function () {
        _bsTree = new BinarySearchTree_1.BinarySearchTree();
    });
    it('#1. Test creation', function () {
        expect(_bsTree).toBeTruthy();
    });
    it('#2. Test insert', function () {
        // Insert
        var nnode = _bsTree.insert(1, 'A');
        expect(nnode).toBeTruthy();
        nnode = _bsTree.insert(2, 'B');
        expect(nnode).toBeTruthy();
        nnode = _bsTree.insert(3, 'C');
        expect(nnode).toBeTruthy();
    });
    var buildTestTree = function () {
        _bsTree.insert(11, '11');
        _bsTree.insert(7, '7');
        _bsTree.insert(15, '15');
        _bsTree.insert(5, '5');
        _bsTree.insert(3, '3');
        _bsTree.insert(9, '9');
        _bsTree.insert(8, '8');
        _bsTree.insert(10, '10');
        _bsTree.insert(13, '13');
        _bsTree.insert(12, '12');
        _bsTree.insert(14, '14');
        _bsTree.insert(20, '20');
        _bsTree.insert(18, '18');
        _bsTree.insert(25, '25');
        _bsTree.insert(6, '6');
    };
    it('#3. Test inOrderTraverse', function () {
        // Build test tree
        buildTestTree();
        var _rst = '';
        _bsTree.inOrderTraverse(function (value) {
            if (_rst === '') {
                _rst = value.data;
            }
            else {
                _rst += ',' + value.data;
            }
        });
        expect(_rst).toBe('3,5,6,7,8,9,10,11,12,13,14,15,18,20,25');
    });
    it('#4. Test preOrderTraverse', function () {
        // Build test tree
        buildTestTree();
        var _rst = '';
        _bsTree.preOrderTraverse(function (value) {
            if (_rst === '') {
                _rst = value.data;
            }
            else {
                _rst += ',' + value.data;
            }
        });
        expect(_rst).toBe('11,7,5,3,6,9,8,10,15,13,12,14,20,18,25');
    });
    it('#5. Test postOrderTraverse', function () {
        // Build test tree
        buildTestTree();
        var _rst = '';
        _bsTree.postOrderTraverse(function (value) {
            if (_rst === '') {
                _rst = value.data;
            }
            else {
                _rst += ',' + value.data;
            }
        });
        expect(_rst).toBe('3,6,5,8,10,9,7,12,14,13,18,25,20,15,11');
    });
    it('#6. Test min', function () {
        // Build test tree
        buildTestTree();
        var minnode = _bsTree.min();
        expect(minnode).toBeTruthy();
        expect(minnode.key).toBe(3);
    });
    it('#7. Test max', function () {
        // Build test tree
        buildTestTree();
        var maxnode = _bsTree.max();
        expect(maxnode).toBeTruthy();
        expect(maxnode.key).toBe(25);
    });
    it('#8. Test search', function () {
        // Build test tree
        buildTestTree();
        var node = _bsTree.search(1);
        expect(node).toBeFalsy();
        node = _bsTree.search(8);
        expect(node).toBeTruthy();
        expect(node.key).toBe(8);
    });
});
//# sourceMappingURL=BinarySearchTree.spec.js.map