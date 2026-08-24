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
import { IBinaryTreeNode, IBinarySearchTree, BinarySearchTreeCallback } from './ITree';
export declare class BinarySearchTreeNode<T> implements IBinaryTreeNode<T> {
    leftNode?: BinarySearchTreeNode<T>;
    rightNode?: BinarySearchTreeNode<T>;
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
     * @returns the node if found, `undefined` otherwise (including an empty tree)
     */
    search(key: number): BinarySearchTreeNode<T> | undefined;
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
    min(): BinarySearchTreeNode<T> | undefined;
    /**
     * Maximum node
     */
    max(): BinarySearchTreeNode<T> | undefined;
    /**
     * Remove a node by key.
     * @param key Key of the node to be deleted
     * @returns true if a node was removed, false if the key was not found
     */
    remove(key: number): boolean;
    /**
     * @protected
     * In-Order Traverse Node
     */
    protected inOrderTraverseNode(node: BinarySearchTreeNode<T> | undefined, callback: BinarySearchTreeCallback<T>): void;
    /**
     * @protected
     * Pre-Order Traverse Node
     */
    protected preOrderTraverseNode(node: BinarySearchTreeNode<T> | undefined, callback: BinarySearchTreeCallback<T>): void;
    /**
     * @protected
     * Post-Order Traverse Node
     */
    protected postOrderTraverseNode(node: BinarySearchTreeNode<T> | undefined, callback: BinarySearchTreeCallback<T>): void;
    /**
     * @protected
     * Minuimum Node
     */
    protected minNode(node: BinarySearchTreeNode<T> | undefined): BinarySearchTreeNode<T> | undefined;
    /**
     * @protected
     * Maximum Node
     */
    protected maxNode(node: BinarySearchTreeNode<T> | undefined): BinarySearchTreeNode<T> | undefined;
    /**
     * @protected
     * Insert Node
     */
    protected insertNode(parnode: BinarySearchTreeNode<T>, newnode: BinarySearchTreeNode<T>): void;
    /**
     * @protected
     * Search Node
     */
    protected searchNode(node: BinarySearchTreeNode<T> | undefined, key: number): BinarySearchTreeNode<T> | undefined;
    /**
     * @protected
     * Remove Node
     */
    protected removeNode(node: BinarySearchTreeNode<T> | undefined, key: number): BinarySearchTreeNode<T> | undefined;
}
