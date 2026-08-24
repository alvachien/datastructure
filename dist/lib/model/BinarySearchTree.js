/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.ts
 * Binary search tree
 */
// Binary search tree node
export class BinarySearchTreeNode {
    // Optional (`| undefined`): on a leaf, both are undefined. Declaring them
    // with `!` definite-assignment hid the undefined-ness from the type system,
    // forcing callers/recursions to rely on fragile `!== undefined` checks
    // whose correctness was unverifiable. Optional makes the absence honest.
    leftNode;
    rightNode;
    _key;
    _data;
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
}
// Binary search tree
export class BinarySearchTree {
    _root;
    get rootNode() {
        return this._root;
    }
    constructor() {
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
     * @returns the node if found, `undefined` otherwise (including an empty tree)
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
     * Remove a node by key.
     * @param key Key of the node to be deleted
     * @returns true if a node was removed, false if the key was not found
     */
    remove(key) {
        if (this._root === undefined) {
            return false;
        }
        if (!this.searchNode(this._root, key)) {
            return false;
        }
        this._root = this.removeNode(this._root, key);
        return true;
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
            node.data = aux.data;
            node.rightNode = this.removeNode(node.rightNode, aux.key);
            return node;
        }
    }
}
//# sourceMappingURL=BinarySearchTree.js.map