"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearchTreeNode = /** @class */ (function () {
    function BinarySearchTreeNode() {
    }
    return BinarySearchTreeNode;
}());
exports.BinarySearchTreeNode = BinarySearchTreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
    }
    BinarySearchTree.prototype.insert = function (key, value) {
        var newnode = new BinarySearchTreeNode();
        newnode.key = key;
        newnode.value = value;
        if (this.root === undefined) {
            this.root = newnode;
        }
        else {
        }
    };
    BinarySearchTree.prototype.insertNode = function (parnode, newnode) {
        if (newnode.key < parnode.key) {
            if (parnode.leftNode === undefined) {
                parnode.leftNode = newnode;
            }
            else {
                this.insertNode(parnode.leftNode, newnode);
            }
        }
        else {
            if (parnode.rightNode === undefined) {
                parnode.rightNode = newnode;
            }
            else {
                this.insertNode(parnode.rightNode, newnode);
            }
        }
    };
    BinarySearchTree.prototype.search = function (key) {
    };
    BinarySearchTree.prototype.inOrderTraverse = function () {
    };
    BinarySearchTree.prototype.preOrderTraverse = function () {
    };
    BinarySearchTree.prototype.postOrderTraverse = function () {
    };
    BinarySearchTree.prototype.min = function () {
    };
    BinarySearchTree.prototype.max = function () {
    };
    BinarySearchTree.prototype.remove = function (key) {
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.js.map