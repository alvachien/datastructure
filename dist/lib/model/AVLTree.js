"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: AVLTree.ts
 * AVL tree
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearchTree_1 = require("./BinarySearchTree");
var AVLBalanceFactor;
(function (AVLBalanceFactor) {
    AVLBalanceFactor[AVLBalanceFactor["UNBALANCED_RIGHT"] = 1] = "UNBALANCED_RIGHT";
    AVLBalanceFactor[AVLBalanceFactor["SLIGHTLY_UNBALANCED_RIGHT"] = 2] = "SLIGHTLY_UNBALANCED_RIGHT";
    AVLBalanceFactor[AVLBalanceFactor["BALANCED"] = 3] = "BALANCED";
    AVLBalanceFactor[AVLBalanceFactor["SLIGHTLY_UNBALANCED_LEFT"] = 4] = "SLIGHTLY_UNBALANCED_LEFT";
    AVLBalanceFactor[AVLBalanceFactor["UNBALANCED_LEFT"] = 5] = "UNBALANCED_LEFT";
})(AVLBalanceFactor = exports.AVLBalanceFactor || (exports.AVLBalanceFactor = {}));
var AVLTree = /** @class */ (function (_super) {
    __extends(AVLTree, _super);
    function AVLTree() {
        return _super.call(this) || this;
    }
    /**
     * Insert node
     * @param key Key of the node
     * @param data Data of the node
     */
    AVLTree.prototype.insert = function (key, data) {
        var newnode = new BinarySearchTree_1.BinarySearchTreeNode(key, data);
        if (this._root === undefined) {
            this._root = newnode;
        }
        else {
            this.insertNode(this._root, newnode);
        }
        return newnode;
    };
    AVLTree.prototype.getNodeHeight = function (node) {
        if (!node) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.leftNode), this.getNodeHeight(node.rightNode)) + 1;
    };
    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T>
     */
    AVLTree.prototype.rotationLL = function (node) {
        var tmp = node.leftNode;
        node.leftNode = tmp.rightNode;
        tmp.rightNode = node;
        return tmp;
    };
    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    AVLTree.prototype.rotationRR = function (node) {
        var tmp = node.rightNode;
        node.rightNode = tmp.leftNode;
        tmp.leftNode = node;
        return tmp;
    };
    /**
     * Left right case: rotate left then right
     * @param node Node<T>
     */
    AVLTree.prototype.rotationLR = function (node) {
        node.leftNode = this.rotationRR(node.leftNode);
        return this.rotationLL(node);
    };
    /**
     * Right left case: rotate right then left
     * @param node Node<T>
     */
    AVLTree.prototype.rotationRL = function (node) {
        node.rightNode = this.rotationLL(node.rightNode);
        return this.rotationRR(node);
    };
    AVLTree.prototype.getBalanceFactor = function (node) {
        var heightDifference = this.getNodeHeight(node.leftNode) - this.getNodeHeight(node.rightNode);
        switch (heightDifference) {
            case -2:
                return AVLBalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return AVLBalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return AVLBalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return AVLBalanceFactor.UNBALANCED_LEFT;
            default:
                return AVLBalanceFactor.BALANCED;
        }
    };
    return AVLTree;
}(BinarySearchTree_1.BinarySearchTree));
exports.AVLTree = AVLTree;
//# sourceMappingURL=AVLTree.js.map