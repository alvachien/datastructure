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
export class BinaryTreeNode {
    constructor() {
        this._left = null;
        this._right = null;
        this._left = null;
        this._right = null;
    }
    get Data() {
        return this._data;
    }
    set Data(data) {
        this._data = data;
    }
    get Left() {
        return this._left;
    }
    set Left(left) {
        this._left = left;
    }
    get Right() {
        return this._right;
    }
    set Right(right) {
        this._right = right;
    }
}
export class BinaryTree {
    constructor() {
        this._root = null;
    }
    get Root() {
        return this._root;
    }
    set Root(root) {
        this._root = root;
    }
    InorderTraversal() {
        const arRst = new Array();
        if (this._root !== null) {
            this.InorderImpl(this._root, arRst);
        }
        return arRst;
    }
    InorderImpl(curNode, arRst) {
        if (curNode !== null) {
            this.InorderImpl(curNode.Left, arRst);
            arRst.push(curNode);
            this.InorderImpl(curNode.Right, arRst);
        }
    }
    PreorderTraversal() {
        const arRst = new Array();
        if (this._root !== null) {
            this.PreorderImpl(this._root, arRst);
        }
        return arRst;
    }
    PreorderImpl(curNode, arRst) {
        if (curNode !== null) {
            arRst.push(curNode);
            this.PreorderImpl(curNode.Left, arRst);
            this.PreorderImpl(curNode.Right, arRst);
        }
    }
    PostorderTraversal() {
        const arRst = new Array();
        if (this._root !== null) {
            this.PostorderImpl(this._root, arRst);
        }
        return arRst;
    }
    PostorderImpl(curNode, arRst) {
        if (curNode !== null) {
            this.PostorderImpl(curNode.Left, arRst);
            this.PostorderImpl(curNode.Right, arRst);
            arRst.push(curNode);
        }
    }
    InsertNode(parNode, data) {
        if (parNode === null && this._root !== null) {
            return null;
        }
        if (parNode === null) {
            const node = new BinaryTreeNode();
            node.Data = data;
            this._root = node;
            return this._root;
        }
        if (parNode.Left !== null && parNode.Right !== null) {
            // Parent node is full, cannot add!
            return null;
        }
        const nnode = new BinaryTreeNode();
        nnode.Data = data;
        if (parNode.Left === null) {
            parNode.Left = nnode;
        }
        else if (parNode.Right === null) {
            parNode.Right = nnode;
        }
        return nnode;
    }
    FindNode(elem) {
        if (this._root === null) {
            return null;
        }
        const arNodes = this.PreorderTraversal();
        for (const nod of arNodes) {
            if (nod.Data === elem) {
                return undefined;
            }
        }
    }
}
//# sourceMappingURL=BinaryTree.js.map