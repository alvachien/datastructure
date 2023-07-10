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
import { IBinaryTreeNode, IBinarySearchTree, BinarySearchTreeCallback } from './ITree';
export declare class BinarySearchTreeNode<T> implements IBinaryTreeNode<T> {
    leftNode: BinarySearchTreeNode<T>;
    rightNode: BinarySearchTreeNode<T>;
    private _key;
    private _data;
    get key(): number;
    set key(keynumber: number);
    get data(): T;
    set data(value: T);
    constructor(key?: number, data?: T);
}
export declare class BinarySearchTree<T> implements IBinarySearchTree<T> {
    protected _root: BinarySearchTreeNode<T>;
    get rootNode(): BinarySearchTreeNode<T>;
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
     * @protected
     * In-Order Traverse Node
     */
    protected inOrderTraverseNode(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>): void;
    /**
     * @protected
     * Pre-Order Traverse Node
     */
    protected preOrderTraverseNode(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>): void;
    /**
     * @protected
     * Post-Order Traverse Node
     */
    protected postOrderTraverseNode(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>): void;
    /**
     * @protected
     * Minuimum Node
     */
    protected minNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>;
    /**
     * @protected
     * Maximum Node
     */
    protected maxNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T>;
    /**
     * @protected
     * Insert Node
     */
    protected insertNode(parnode: BinarySearchTreeNode<T>, newnode: BinarySearchTreeNode<T>): void;
    /**
     * @protected
     * Search Node
     */
    protected searchNode(node: BinarySearchTreeNode<T>, key: number): BinarySearchTreeNode<T>;
    /**
     * @protected
     * Remove Node
     */
    protected removeNode(node: BinarySearchTreeNode<T>, key: number): BinarySearchTreeNode<T>;
}
