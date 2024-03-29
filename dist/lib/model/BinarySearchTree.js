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
// Binary search tree node
export class BinarySearchTreeNode {
    constructor(key, data) {
        if ((key === undefined && data !== undefined)
            || (key !== undefined && data === undefined)) {
            throw new Error('invalid input');
        }
        if (key !== undefined && data !== undefined) {
            this._key = key;
            this._data = data;
        }
    }
    get key() {
        return this._key;
    }
    set key(keynumber) {
        this._key = keynumber;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}
// Binary search tree
export class BinarySearchTree {
    constructor() {
    }
    get rootNode() {
        return this._root;
    }
    /**
     * Insert node
     * @param key Key of the node
     * @param data Data of the node
     */
    insert(key, data) {
        const newnode = new BinarySearchTreeNode(key, data);
        if (this._root === undefined) {
            this._root = newnode;
        }
        else {
            this.insertNode(this._root, newnode);
        }
        return newnode;
    }
    /**
     * Search
     * @param key Key to search
     */
    search(key) {
        return this.searchNode(this._root, key);
    }
    /**
     * In-order traverse
     * @param callback Callback to process each node
     */
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this._root, callback);
    }
    /**
     * Pre-order traverse
     * @param callback Callback to process each node
     */
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this._root, callback);
    }
    /**
     * Post-order traverse
     * @param callback Callback to process each node
     */
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this._root, callback);
    }
    /**
     * Minimum node
     */
    min() {
        return this.minNode(this._root);
    }
    /**
     * Maximum node
     */
    max() {
        return this.maxNode(this._root);
    }
    /**
     * Remove a node
     * @param key Key of the node to be deleted
     */
    remove(key) {
    }
    /**
     * @protected
     * In-Order Traverse Node
     */
    inOrderTraverseNode(node, callback) {
        if (node !== undefined) {
            this.inOrderTraverseNode(node.leftNode, callback);
            if (callback !== undefined) {
                callback(node);
            }
            this.inOrderTraverseNode(node.rightNode, callback);
        }
    }
    /**
     * @protected
     * Pre-Order Traverse Node
     */
    preOrderTraverseNode(node, callback) {
        if (node !== undefined) {
            if (callback !== undefined) {
                callback(node);
            }
            this.preOrderTraverseNode(node.leftNode, callback);
            this.preOrderTraverseNode(node.rightNode, callback);
        }
    }
    /**
     * @protected
     * Post-Order Traverse Node
     */
    postOrderTraverseNode(node, callback) {
        if (node !== undefined) {
            this.postOrderTraverseNode(node.leftNode, callback);
            this.postOrderTraverseNode(node.rightNode, callback);
            if (callback !== undefined) {
                callback(node);
            }
        }
    }
    /**
     * @protected
     * Minuimum Node
     */
    minNode(node) {
        if (node !== undefined) {
            while (node !== undefined && node.leftNode !== undefined) {
                node = node.leftNode;
            }
            return node;
        }
        return undefined;
    }
    /**
     * @protected
     * Maximum Node
     */
    maxNode(node) {
        if (node !== undefined) {
            while (node !== undefined && node.rightNode !== undefined) {
                node = node.rightNode;
            }
            return node;
        }
        return undefined;
    }
    /**
     * @protected
     * Insert Node
     */
    insertNode(parnode, newnode) {
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
    }
    /**
     * @protected
     * Search Node
     */
    searchNode(node, key) {
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
    }
    /**
     * @protected
     * Remove Node
     */
    removeNode(node, key) {
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
            const aux = this.minNode(node.rightNode);
            node.key = aux.key;
            node.rightNode = this.removeNode(node.rightNode, aux.key);
            return node;
        }
    }
}
//# sourceMappingURL=BinarySearchTree.js.map