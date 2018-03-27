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
    insert(key: number, data: T): BinarySearchTreeNode<T>;
    search(key: number): BinarySearchTreeNode<T>;
    inOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    preOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    postOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    min(): BinarySearchTreeNode<T>;
    max(): BinarySearchTreeNode<T>;
    remove(key: number): void;
    private inOrderTraverseNode(node, callback);
    private preOrderTraverseNode(node, callback);
    private postOrderTraverseNode(node, callback);
    private minNode(node);
    private maxNode(node);
    private insertNode(parnode, newnode);
    private searchNode(node, key);
    private removeNode(node, key);
}
