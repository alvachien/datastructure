/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryThreadTree.ts
 *
 */
import { IBinaryTreeNode, IBinaryTree } from './ITree';
export declare enum BinaryThreadTag {
    Link = 0,
    Thread = 1,
}
export declare class BinaryThreadTreeNode<T> implements IBinaryTreeNode<T> {
    private _data;
    private _left;
    private _right;
    private _lefttag;
    private _righttag;
    constructore(): void;
    Data: T;
    Left: BinaryThreadTreeNode<T>;
    LeftTag: BinaryThreadTag;
    Right: BinaryThreadTreeNode<T>;
    RightTag: BinaryThreadTag;
}
export declare class BinaryThreadTree<T> implements IBinaryTree<T> {
    private _root;
    Root: BinaryThreadTreeNode<T>;
    InorderTraversal(): Array<BinaryThreadTreeNode<T>>;
    private InorderImpl(curNode, arRst);
    PreorderTraversal(): Array<BinaryThreadTreeNode<T>>;
    private PreorderImpl(curNode, arRst);
    PostorderTraversal(): Array<BinaryThreadTreeNode<T>>;
    private PostorderImpl(curNode, arRst);
    InsertNode(parNode: BinaryThreadTreeNode<T>, data: T): BinaryThreadTreeNode<T>;
    FindNode(elem: T): IBinaryTreeNode<T>;
}
