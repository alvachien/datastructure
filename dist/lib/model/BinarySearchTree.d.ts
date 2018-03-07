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
export declare class BinarySearchTreeNode<T> {
    leftNode: BinarySearchTreeNode<T>;
    rightNode: BinarySearchTreeNode<T>;
    private _key;
    private _value;
    Key: number;
    Value: T;
    constructor(key?: number, value?: T);
}
export declare class BinarySearchTree<T> {
    private _root;
    readonly Root: BinarySearchTreeNode<T>;
    constructor();
    insert(key: number, value: T): void;
    private insertNode(parnode, newnode);
    search(key: number): BinarySearchTreeNode<T>;
    inOrderTraverse(callback: (node: BinarySearchTreeNode<T>) => void): void;
    preOrderTraverse(callback: (node: BinarySearchTreeNode<T>) => void): void;
    postOrderTraverse(callback: (node: BinarySearchTreeNode<T>) => void): void;
    min(): BinarySearchTreeNode<T>;
    max(): BinarySearchTreeNode<T>;
    remove(key: number): void;
    private inOrderTraverseNode(node, callback);
    private preOrderTraverseNode(node, callback);
    private postOrderTraverseNode(node, callback);
    private minNode(node);
    private maxNode(node);
    private searchNode(node, key);
    private removeNode(node, key);
}
