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
    key: number;
    value: T;
}
export declare class BinarySearchTree<T> {
    root: BinarySearchTreeNode<T>;
    constructor();
    insert(key: number, value: T): void;
    private insertNode(parnode, newnode);
    search(key: number): void;
    inOrderTraverse(): void;
    preOrderTraverse(): void;
    postOrderTraverse(): void;
    min(): void;
    max(): void;
    remove(key: number): void;
}
