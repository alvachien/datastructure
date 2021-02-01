"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryTree.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.BinaryTreeNode = void 0;
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode() {
        this._left = null;
        this._right = null;
    }
    BinaryTreeNode.prototype.constructore = function () {
        this._left = null;
        this._right = null;
    };
    Object.defineProperty(BinaryTreeNode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinaryTreeNode.prototype, "Left", {
        get: function () {
            return this._left;
        },
        set: function (left) {
            this._left = left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinaryTreeNode.prototype, "Right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            this._right = right;
        },
        enumerable: false,
        configurable: true
    });
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this._root = null;
    }
    Object.defineProperty(BinaryTree.prototype, "Root", {
        get: function () {
            return this._root;
        },
        set: function (root) {
            this._root = root;
        },
        enumerable: false,
        configurable: true
    });
    BinaryTree.prototype.InorderTraversal = function () {
        var arRst = new Array();
        if (this._root !== null) {
            this.InorderImpl(this._root, arRst);
        }
        return arRst;
    };
    BinaryTree.prototype.InorderImpl = function (curNode, arRst) {
        if (curNode !== null) {
            this.InorderImpl(curNode.Left, arRst);
            arRst.push(curNode);
            this.InorderImpl(curNode.Right, arRst);
        }
    };
    BinaryTree.prototype.PreorderTraversal = function () {
        var arRst = new Array();
        if (this._root !== null) {
            this.PreorderImpl(this._root, arRst);
        }
        return arRst;
    };
    BinaryTree.prototype.PreorderImpl = function (curNode, arRst) {
        if (curNode !== null) {
            arRst.push(curNode);
            this.PreorderImpl(curNode.Left, arRst);
            this.PreorderImpl(curNode.Right, arRst);
        }
    };
    BinaryTree.prototype.PostorderTraversal = function () {
        var arRst = new Array();
        if (this._root !== null) {
            this.PostorderImpl(this._root, arRst);
        }
        return arRst;
    };
    BinaryTree.prototype.PostorderImpl = function (curNode, arRst) {
        if (curNode !== null) {
            this.PostorderImpl(curNode.Left, arRst);
            this.PostorderImpl(curNode.Right, arRst);
            arRst.push(curNode);
        }
    };
    BinaryTree.prototype.InsertNode = function (parNode, data) {
        if (parNode === null && this._root !== null) {
            return null;
        }
        if (parNode === null) {
            var node = new BinaryTreeNode();
            node.Data = data;
            this._root = node;
            return this._root;
        }
        if (parNode.Left !== null && parNode.Right !== null) {
            // Parent node is full, cannot add!
            return null;
        }
        var nnode = new BinaryTreeNode();
        nnode.Data = data;
        if (parNode.Left === null) {
            parNode.Left = nnode;
        }
        else if (parNode.Right === null) {
            parNode.Right = nnode;
        }
        return nnode;
    };
    BinaryTree.prototype.FindNode = function (elem) {
        if (this._root === null) {
            return null;
        }
        var arNodes = this.PreorderTraversal();
        for (var _i = 0, arNodes_1 = arNodes; _i < arNodes_1.length; _i++) {
            var nod = arNodes_1[_i];
            if (nod.Data === elem) {
                return undefined;
            }
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=BinaryTree.js.map