/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryTree.ts
 *
 */
import { IBinaryTreeNode, IBinaryTree } from './ITree';
export declare class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
    private _data;
    private _left;
    private _right;
    constructore(): void;
    Data: T;
    Left: BinaryTreeNode<T>;
    Right: BinaryTreeNode<T>;
}
export declare class BinaryTree<T> implements IBinaryTree<T> {
    private _root;
    Root: BinaryTreeNode<T>;
    InorderTraversal(): Array<BinaryTreeNode<T>>;
    private InorderImpl(curNode, arRst);
    PreorderTraversal(): Array<BinaryTreeNode<T>>;
    private PreorderImpl(curNode, arRst);
    PostorderTraversal(): Array<BinaryTreeNode<T>>;
    private PostorderImpl(curNode, arRst);
    InsertNode(parNode: BinaryTreeNode<T>, data: T): BinaryTreeNode<T>;
    FindNode(elem: T): IBinaryTreeNode<T>;
}
