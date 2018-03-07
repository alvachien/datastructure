"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(BinarySearchTree.prototype, "Root", {
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    BinarySearchTree.prototype.insert = function (key, value) {
        var newnode = new BinarySearchTreeNode(key, value);
        if (this._root === undefined) {
            this._root = newnode;
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
        return this.searchNode(this._root, key);
    };
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        this.inOrderTraverseNode(this._root, callback);
    };
    BinarySearchTree.prototype.preOrderTraverse = function (callback) {
        this.preOrderTraverseNode(this._root, callback);
    };
    BinarySearchTree.prototype.postOrderTraverse = function (callback) {
        this.postOrderTraverseNode(this._root, callback);
    };
    BinarySearchTree.prototype.min = function () {
        return this.minNode(this._root);
    };
    BinarySearchTree.prototype.max = function () {
        return this.maxNode(this._root);
    };
    BinarySearchTree.prototype.remove = function (key) {
    };
    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
        if (node !== undefined) {
            this.inOrderTraverseNode(node.leftNode, callback);
            if (callback !== undefined) {
                callback(node);
            }
            this.inOrderTraverseNode(node.rightNode, callback);
        }
    };
    BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {
        if (node !== undefined) {
            if (callback !== undefined) {
                callback(node);
            }
            this.preOrderTraverseNode(node.leftNode, callback);
            this.preOrderTraverseNode(node.rightNode, callback);
        }
    };
    BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {
        if (node !== undefined) {
            this.postOrderTraverseNode(node.leftNode, callback);
            this.postOrderTraverseNode(node.rightNode, callback);
            if (callback !== undefined) {
                callback(node);
            }
        }
    };
    BinarySearchTree.prototype.minNode = function (node) {
        if (node !== undefined) {
            while (node !== undefined && node.leftNode !== undefined) {
                node = node.leftNode;
            }
            return node;
        }
        return undefined;
    };
    BinarySearchTree.prototype.maxNode = function (node) {
        if (node !== undefined) {
            while (node !== undefined && node.rightNode !== undefined) {
                node = node.rightNode;
            }
            return node;
        }
        return undefined;
    };
    BinarySearchTree.prototype.searchNode = function (node, key) {
        if (node === undefined) {
            return undefined;
        }
        if (key < node.Key) {
            return this.searchNode(node.leftNode, key);
        }
        else if (key > node.Key) {
            return this.searchNode(node.rightNode, key);
        }
        else {
            return node;
        }
    };
    BinarySearchTree.prototype.removeNode = function (node, key) {
        if (node === undefined) {
            return undefined;
        }
        if (key < node.Key) {
            node.leftNode = this.removeNode(node.leftNode, key);
            return node;
        }
        else if (key > node.Key) {
            node.rightNode = this.removeNode(node.rightNode, key);
            return node;
        }
        else {
            if (node.leftNode === undefined && node.rightNode === undefined) {
                node = undefined;
                return node;
            }
            if (node.leftNode === undefined) {
                node = node.rightNode;
                return node;
            }
            else if (node.rightNode === undefined) {
                node = node.leftNode;
                return node;
            }
            var aux = void 0;
            // let aux = findMinNode(node.rightNode);
            node.Key = aux.Key;
            node.rightNode = this.removeNode(node.rightNode, aux.Key);
            return node;
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.js.map