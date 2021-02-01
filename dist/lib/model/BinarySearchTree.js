"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.ts
 * Binary search tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.BinarySearchTreeNode = void 0;
// Binary search tree node
var BinarySearchTreeNode = /** @class */ (function () {
    function BinarySearchTreeNode(key, data) {
        if ((key === undefined && data !== undefined)
            || (key !== undefined && data === undefined)) {
            throw new Error('invalid input');
        }
        if (key !== undefined && data !== undefined) {
            this._key = key;
            this._data = data;
        }
    }
    Object.defineProperty(BinarySearchTreeNode.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (keynumber) {
            this._key = keynumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinarySearchTreeNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    return BinarySearchTreeNode;
}());
exports.BinarySearchTreeNode = BinarySearchTreeNode;
// Binary search tree
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
    }
    Object.defineProperty(BinarySearchTree.prototype, "rootNode", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Insert node
     * @param key Key of the node
     * @param data Data of the node
     */
    BinarySearchTree.prototype.insert = function (key, data) {
        var newnode = new BinarySearchTreeNode(key, data);
        if (this._root === undefined) {
            this._root = newnode;
        }
        else {
            this.insertNode(this._root, newnode);
        }
        return newnode;
    };
    /**
     * Search
     * @param key Key to search
     */
    BinarySearchTree.prototype.search = function (key) {
        return this.searchNode(this._root, key);
    };
    /**
     * In-order traverse
     * @param callback Callback to process each node
     */
    BinarySearchTree.prototype.inOrderTraverse = function (callback) {
        this.inOrderTraverseNode(this._root, callback);
    };
    /**
     * Pre-order traverse
     * @param callback Callback to process each node
     */
    BinarySearchTree.prototype.preOrderTraverse = function (callback) {
        this.preOrderTraverseNode(this._root, callback);
    };
    /**
     * Post-order traverse
     * @param callback Callback to process each node
     */
    BinarySearchTree.prototype.postOrderTraverse = function (callback) {
        this.postOrderTraverseNode(this._root, callback);
    };
    /**
     * Minimum node
     */
    BinarySearchTree.prototype.min = function () {
        return this.minNode(this._root);
    };
    /**
     * Maximum node
     */
    BinarySearchTree.prototype.max = function () {
        return this.maxNode(this._root);
    };
    /**
     * Remove a node
     * @param key Key of the node to be deleted
     */
    BinarySearchTree.prototype.remove = function (key) {
    };
    /**
     * @protected
     * In-Order Traverse Node
     */
    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
        if (node !== undefined) {
            this.inOrderTraverseNode(node.leftNode, callback);
            if (callback !== undefined) {
                callback(node);
            }
            this.inOrderTraverseNode(node.rightNode, callback);
        }
    };
    /**
     * @protected
     * Pre-Order Traverse Node
     */
    BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {
        if (node !== undefined) {
            if (callback !== undefined) {
                callback(node);
            }
            this.preOrderTraverseNode(node.leftNode, callback);
            this.preOrderTraverseNode(node.rightNode, callback);
        }
    };
    /**
     * @protected
     * Post-Order Traverse Node
     */
    BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {
        if (node !== undefined) {
            this.postOrderTraverseNode(node.leftNode, callback);
            this.postOrderTraverseNode(node.rightNode, callback);
            if (callback !== undefined) {
                callback(node);
            }
        }
    };
    /**
     * @protected
     * Minuimum Node
     */
    BinarySearchTree.prototype.minNode = function (node) {
        if (node !== undefined) {
            while (node !== undefined && node.leftNode !== undefined) {
                node = node.leftNode;
            }
            return node;
        }
        return undefined;
    };
    /**
     * @protected
     * Maximum Node
     */
    BinarySearchTree.prototype.maxNode = function (node) {
        if (node !== undefined) {
            while (node !== undefined && node.rightNode !== undefined) {
                node = node.rightNode;
            }
            return node;
        }
        return undefined;
    };
    /**
     * @protected
     * Insert Node
     */
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
    /**
     * @protected
     * Search Node
     */
    BinarySearchTree.prototype.searchNode = function (node, key) {
        if (node === undefined) {
            return undefined;
        }
        if (key < node.key) {
            return this.searchNode(node.leftNode, key);
        }
        else if (key > node.key) {
            return this.searchNode(node.rightNode, key);
        }
        else {
            return node;
        }
    };
    /**
     * @protected
     * Remove Node
     */
    BinarySearchTree.prototype.removeNode = function (node, key) {
        if (node === undefined) {
            return undefined;
        }
        if (key < node.key) {
            node.leftNode = this.removeNode(node.leftNode, key);
            return node;
        }
        else if (key > node.key) {
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
            var aux = this.minNode(node.rightNode);
            node.key = aux.key;
            node.rightNode = this.removeNode(node.rightNode, aux.key);
            return node;
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.js.map