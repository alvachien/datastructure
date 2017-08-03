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

export class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
    private _data: T;
    private _left: BinaryTreeNode<T> = null;
    private _right: BinaryTreeNode<T> = null;

    constructore() {
        this._left = null;
        this._right = null;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
    get Left(): BinaryTreeNode<T> {
        return this._left;
    }
    set Left(left: BinaryTreeNode<T>) {
        this._left = left;
    }

    get Right(): BinaryTreeNode<T> {
        return this._right;
    }
    set Right(right: BinaryTreeNode<T>) {
        this._right = right;
    }
}

export class BinaryTree<T> implements IBinaryTree<T> {
    private _root: BinaryTreeNode<T> = null;

    get Root() : BinaryTreeNode<T> {
        return this._root;
    }
    set Root(root: BinaryTreeNode<T>) {
        this._root = root;
    }

    public InorderTraversal(): Array<BinaryTreeNode<T>> {
        const arRst: Array<BinaryTreeNode<T>> = new Array<BinaryTreeNode<T>>();

        if (this._root !== null) {
            this.InorderImpl(this._root, arRst);
        }

        return arRst;
    }

    private InorderImpl(curNode: BinaryTreeNode<T>, arRst: Array<BinaryTreeNode<T>>) {
        if (curNode !== null) {

            this.InorderImpl(curNode.Left, arRst);
            arRst.push(curNode);
            this.InorderImpl(curNode.Right, arRst);
        }
    }

    public PreorderTraversal(): Array<BinaryTreeNode<T>> {
        const arRst: Array<BinaryTreeNode<T>> = new Array<BinaryTreeNode<T>>();

        if (this._root !== null) {
            this.PreorderImpl(this._root, arRst);
        }

        return arRst;
    }

    private PreorderImpl(curNode: BinaryTreeNode<T>, arRst: Array<BinaryTreeNode<T>>) {
        if (curNode !== null) {
            arRst.push(curNode);

            this.PreorderImpl(curNode.Left, arRst);
            this.PreorderImpl(curNode.Right, arRst);
        }
    }

    public PostorderTraversal(): Array<BinaryTreeNode<T>> {
        const arRst: Array<BinaryTreeNode<T>> = new Array<BinaryTreeNode<T>>();

        if (this._root !== null) {
            this.PostorderImpl(this._root, arRst);
        }

        return arRst;
    }

    private PostorderImpl(curNode: BinaryTreeNode<T>, arRst: Array<BinaryTreeNode<T>>) {
        if (curNode !== null) {
            this.PostorderImpl(curNode.Left, arRst);
            this.PostorderImpl(curNode.Right, arRst);
            arRst.push(curNode);
        }
    }

    public InsertNode(parNode: BinaryTreeNode<T>, data: T): BinaryTreeNode<T> {
        if (parNode === null && this._root !== null) {
            return null;
        }

        if (parNode === null) {
            const node: BinaryTreeNode<T> = new BinaryTreeNode<T>();
            node.Data = data;

            this._root = node;
            return this._root;
        }

        if (parNode.Left !== null && parNode.Right !== null) {
            // Parent node is full, cannot add!
            return null;
        }

        const nnode: BinaryTreeNode<T> = new BinaryTreeNode<T>();
        nnode.Data = data;
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

        const arNodes: Array<BinaryTreeNode<T>> = this.PreorderTraversal();
        for (const nod of arNodes) {
            if (nod.Data === elem) {
                return nod;
            }
        }
    }
}
