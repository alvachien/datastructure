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
export enum BinaryThreadTag {
  Link = 0,
  Thread
};

/**
 * Thread Tree Node
 */
export class BinaryThreadTreeNode<T> implements IBinaryTreeNode<T> {
  private _key: number;
  private _data: T;
  private _left: BinaryThreadTreeNode<T>;
  private _right: BinaryThreadTreeNode<T>;
  private _lefttag: BinaryThreadTag;
  private _righttag: BinaryThreadTag;

  constructore() {
    this._left = undefined;
    this._right = undefined;
  }

  get key(): number {
    return this._key;
  }
  set key(key: number) {
    this._key = key;
  }
  get data(): T {
    return this._data;
  }
  set data(data: T) {
    this._data = data;
  }
  get Left(): BinaryThreadTreeNode<T> {
    return this._left;
  }
  set Left(left: BinaryThreadTreeNode<T>) {
    this._left = left;
  }

  get LeftTag(): BinaryThreadTag {
    return this._lefttag;
  }
  set LeftTag(lt: BinaryThreadTag) {
    this._lefttag = lt;
  }

  get Right(): BinaryThreadTreeNode<T> {
    return this._right;
  }
  set Right(right: BinaryThreadTreeNode<T>) {
    this._right = right;
  }

  get RightTag(): BinaryThreadTag {
    return this._righttag;
  }
  set RightTag(rt: BinaryThreadTag) {
    this._righttag = rt;
  }
}

/**
 * Binary Thread Tree
 */
export class BinaryThreadTree<T> implements IBinaryTree<T> {
  private _root: BinaryThreadTreeNode<T>;

  get rootNode(): BinaryThreadTreeNode<T> {
    return this._root;
  }
  set rootNode(root: BinaryThreadTreeNode<T>) {
    this._root = root;
  }

  public InorderTraversal(): Array<BinaryThreadTreeNode<T>> {
    const arRst: Array<BinaryThreadTreeNode<T>> = new Array<BinaryThreadTreeNode<T>>();

    if (this._root !== null) {
      this.InorderImpl(this._root, arRst);
    }

    return arRst;
  }

  private InorderImpl(curNode: BinaryThreadTreeNode<T>, arRst: Array<BinaryThreadTreeNode<T>>) {
    if (curNode !== null) {

      this.InorderImpl(curNode.Left, arRst);
      arRst.push(curNode);
      this.InorderImpl(curNode.Right, arRst);
    }
  }

  public PreorderTraversal(): Array<BinaryThreadTreeNode<T>> {
    const arRst: Array<BinaryThreadTreeNode<T>> = new Array<BinaryThreadTreeNode<T>>();

    if (this._root !== null) {
      this.PreorderImpl(this._root, arRst);
    }

    return arRst;
  }

  private PreorderImpl(curNode: BinaryThreadTreeNode<T>, arRst: Array<BinaryThreadTreeNode<T>>) {
    if (curNode !== null) {
      arRst.push(curNode);

      this.PreorderImpl(curNode.Left, arRst);
      this.PreorderImpl(curNode.Right, arRst);
    }
  }

  public PostorderTraversal(): Array<BinaryThreadTreeNode<T>> {
    const arRst: Array<BinaryThreadTreeNode<T>> = new Array<BinaryThreadTreeNode<T>>();

    if (this._root !== null) {
      this.PostorderImpl(this._root, arRst);
    }

    return arRst;
  }

  private PostorderImpl(curNode: BinaryThreadTreeNode<T>, arRst: Array<BinaryThreadTreeNode<T>>) {
    if (curNode !== null) {
      this.PostorderImpl(curNode.Left, arRst);
      this.PostorderImpl(curNode.Right, arRst);
      arRst.push(curNode);
    }
  }

  public InsertNode(parNode: BinaryThreadTreeNode<T>, key: number, data: T): BinaryThreadTreeNode<T> {
    if (parNode === null && this._root !== null) {
      return null;
    }

    if (parNode === null) {
      const node: BinaryThreadTreeNode<T> = new BinaryThreadTreeNode<T>();
      node.data = data;

      this._root = node;
      return this._root;
    }

    if (parNode.Left !== null && parNode.Right !== null) {
      // Parent node is full, cannot add!
      return null;
    }

    const nnode: BinaryThreadTreeNode<T> = new BinaryThreadTreeNode<T>();
    nnode.data = data;
    if (parNode.Left === null) {
      parNode.Left = nnode;
    } else if (parNode.Right === null) {
      parNode.Right = nnode;
    }

    return nnode;
  }

  public FindNode(elem: T): IBinaryTreeNode<T> {
    if (this._root === null) {
      return null;
    }

    const arNodes: Array<BinaryThreadTreeNode<T>> = this.PreorderTraversal();
    for (const nod of arNodes) {
      if (nod.data === elem) {
        return nod;
      }
    }
  }
}
