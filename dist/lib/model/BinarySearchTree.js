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
    function BinarySearchTreeNode(key, value) {
        if ((key === undefined && value !== undefined)
            || (key !== undefined && value === undefined)) {
            throw new Error('invalid input');
        }
        if (key !== undefined && value !== undefined) {
            this._key = key;
            this._value = value;
        }
    }
    Object.defineProperty(BinarySearchTreeNode.prototype, "Key", {
        get: function () {
            return this._key;
        },
        set: function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinarySearchTreeNode.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return BinarySearchTreeNode;
}());
exports.BinarySearchTreeNode = BinarySearchTreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
    }
    BinarySearchTree.prototype.insert = function (key, value) {
        var newnode = new BinarySearchTreeNode(key, value);
        if (this.root === undefined) {
            this.root = newnode;
        }
        else {
        }
    };
    BinarySearchTree.prototype.insertNode = function (parnode, newnode) {
        if (newnode.Key < parnode.Key) {
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