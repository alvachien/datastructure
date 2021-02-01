/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryThreadTree.ts
 *
 */
import { IBinaryTreeNode, IBinaryTree } from './ITree';
/**
 * Thread tag
 */
export declare enum BinaryThreadTag {
    Link = 0,
    Thread = 1
}
/**
 * Thread Tree Node
 */
export declare class BinaryThreadTreeNode<T> implements IBinaryTreeNode<T> {
    private _key;
    private _data;
    private _left;
    private _right;
    private _lefttag;
    private _righttag;
    constructore(): void;
    get key(): number;
    set key(key: number);
    get data(): T;
    set data(data: T);
    get Left(): BinaryThreadTreeNode<T>;
    set Left(left: BinaryThreadTreeNode<T>);
    get LeftTag(): BinaryThreadTag;
    set LeftTag(lt: BinaryThreadTag);
    get Right(): BinaryThreadTreeNode<T>;
    set Right(right: BinaryThreadTreeNode<T>);
    get RightTag(): BinaryThreadTag;
    set RightTag(rt: BinaryThreadTag);
}
/**
 * Binary Thread Tree
 */
export declare class BinaryThreadTree<T> implements IBinaryTree<T> {
    private _root;
    get rootNode(): BinaryThreadTreeNode<T>;
    set rootNode(root: BinaryThreadTreeNode<T>);
    InorderTraversal(): Array<BinaryThreadTreeNode<T>>;
    private InorderImpl;
    PreorderTraversal(): Array<BinaryThreadTreeNode<T>>;
    private PreorderImpl;
    PostorderTraversal(): Array<BinaryThreadTreeNode<T>>;
    private PostorderImpl;
    InsertNode(parNode: BinaryThreadTreeNode<T>, key: number, data: T): BinaryThreadTreeNode<T>;
    FindNode(elem: T): IBinaryTreeNode<T>;
}
