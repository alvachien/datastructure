/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.ts
 * Binary search tree
 */
import { IBinaryTreeNode, IBinarySearchTree, BinarySearchTreeCallback } from './ITree';
export declare class BinarySearchTreeNode<T> implements IBinaryTreeNode<T> {
    leftNode: BinarySearchTreeNode<T>;
    rightNode: BinarySearchTreeNode<T>;
    private _key;
    private _data;
    key: number;
    data: T;
    constructor(key?: number, data?: T);
}
export declare class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private _root;
    readonly rootNode: BinarySearchTreeNode<T>;
    constructor();
    /**
     * Insert node
     * @param key Key of the node
     * @param data Data of the node
     */
    insert(key: number, data: T): BinarySearchTreeNode<T>;
    /**
     * Search
     * @param key Key to search
     */
    search(key: number): BinarySearchTreeNode<T>;
    /**
     * In-order traverse
     * @param callback Callback to process each node
     */
    inOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    /**
     * Pre-order traverse
     * @param callback Callback to process each node
     */
    preOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    /**
     * Post-order traverse
     * @param callback Callback to process each node
     */
    postOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    /**
     * Minimum node
     */
    min(): BinarySearchTreeNode<T>;
    /**
     * Maximum node
     */
    max(): BinarySearchTreeNode<T>;
    /**
     * Remove a node
     * @param key Key of the node to be deleted
     */
    remove(key: number): void;
    /**
     * @private
     * In-Order Traverse Node
     */
    private inOrderTraverseNode(node, callback);
    /**
     * @private
     * Pre-Order Traverse Node
     */
    private preOrderTraverseNode(node, callback);
    /**
     * @private
     * Post-Order Traverse Node
     */
    private postOrderTraverseNode(node, callback);
    /**
     * @private
     * Minuimum Node
     */
    private minNode(node);
    /**
     * @private
     * Maximum Node
     */
    private maxNode(node);
    /**
     * @private
     * Insert Node
     */
    private insertNode(parnode, newnode);
    /**
     * @private
     * Search Node
     */
    private searchNode(node, key);
    /**
     * @private
     * Remove Node
     */
    private removeNode(node, key);
}
