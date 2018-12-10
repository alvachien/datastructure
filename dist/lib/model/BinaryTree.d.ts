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
    constructore(): void;
    Data: T;
    Left: BinaryTreeNode<T>;
    Right: BinaryTreeNode<T>;
}
export declare class BinaryTree<T> {
    private _root;
    Root: BinaryTreeNode<T>;
    InorderTraversal(): Array<BinaryTreeNode<T>>;
    private InorderImpl;
    PreorderTraversal(): Array<BinaryTreeNode<T>>;
    private PreorderImpl;
    PostorderTraversal(): Array<BinaryTreeNode<T>>;
    private PostorderImpl;
    InsertNode(parNode: BinaryTreeNode<T>, data: T): BinaryTreeNode<T>;
    FindNode(elem: T): IBinaryTreeNode<T>;
}
