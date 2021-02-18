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
/**
 * Thread tag
 */
export var BinaryThreadTag;
(function (BinaryThreadTag) {
    BinaryThreadTag[BinaryThreadTag["Link"] = 0] = "Link";
    BinaryThreadTag[BinaryThreadTag["Thread"] = 1] = "Thread";
})(BinaryThreadTag || (BinaryThreadTag = {}));
;
/**
 * Thread Tree Node
 */
export class BinaryThreadTreeNode {
    constructor() {
        this._left = undefined;
        this._right = undefined;
    }
    get key() {
        return this._key;
    }
    set key(key) {
        this._key = key;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    get Left() {
        return this._left;
    }
    set Left(left) {
        this._left = left;
    }
    get LeftTag() {
        return this._lefttag;
    }
    set LeftTag(lt) {
        this._lefttag = lt;
    }
    get Right() {
        return this._right;
    }
    set Right(right) {
        this._right = right;
    }
    get RightTag() {
        return this._righttag;
    }
    set RightTag(rt) {
        this._righttag = rt;
    }
}
/**
 * Binary Thread Tree
 */
export class BinaryThreadTree {
    get rootNode() {
        return this._root;
    }
    set rootNode(root) {
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
    InsertNode(parNode, key, data) {
        if (parNode === null && this._root !== null) {
            return null;
        }
        if (parNode === null) {
            const node = new BinaryThreadTreeNode();
            node.data = data;
            this._root = node;
            return this._root;
        }
        if (parNode.Left !== null && parNode.Right !== null) {
            // Parent node is full, cannot add!
            return null;
        }
        const nnode = new BinaryThreadTreeNode();
        nnode.data = data;
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
            if (nod.data === elem) {
                return nod;
            }
        }
    }
}
//# sourceMappingURL=BinaryThreadTree.js.map