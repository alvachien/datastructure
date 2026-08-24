/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryTree.ts
 *
 */
export declare class BinaryTreeNode<T> {
    private _data;
    private _left;
    private _right;
    constructor();
    get Data(): T;
    set Data(data: T);
    get Left(): BinaryTreeNode<T> | null;
    set Left(left: BinaryTreeNode<T>);
    get Right(): BinaryTreeNode<T> | null;
    set Right(right: BinaryTreeNode<T>);
}
export declare class BinaryTree<T> {
    private _root;
    get Root(): BinaryTreeNode<T> | null;
    set Root(root: BinaryTreeNode<T>);
    InorderTraversal(): Array<BinaryTreeNode<T>>;
    private InorderImpl;
    PreorderTraversal(): Array<BinaryTreeNode<T>>;
    private PreorderImpl;
    PostorderTraversal(): Array<BinaryTreeNode<T>>;
    private PostorderImpl;
    InsertNode(parNode: BinaryTreeNode<T> | null, data: T): BinaryTreeNode<T> | null;
    FindNode(elem: T): BinaryTreeNode<T> | null;
}
