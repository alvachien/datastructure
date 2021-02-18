/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryTree.ts
 *
 */
import { IBinaryTreeNode } from './ITree';
export declare class BinaryTreeNode<T> {
    private _data;
    private _left;
    private _right;
    constructor();
    get Data(): T;
    set Data(data: T);
    get Left(): BinaryTreeNode<T>;
    set Left(left: BinaryTreeNode<T>);
    get Right(): BinaryTreeNode<T>;
    set Right(right: BinaryTreeNode<T>);
}
export declare class BinaryTree<T> {
    private _root;
    get Root(): BinaryTreeNode<T>;
    set Root(root: BinaryTreeNode<T>);
    InorderTraversal(): Array<BinaryTreeNode<T>>;
    private InorderImpl;
    PreorderTraversal(): Array<BinaryTreeNode<T>>;
    private PreorderImpl;
    PostorderTraversal(): Array<BinaryTreeNode<T>>;
    private PostorderImpl;
    InsertNode(parNode: BinaryTreeNode<T>, data: T): BinaryTreeNode<T>;
    FindNode(elem: T): IBinaryTreeNode<T>;
}
