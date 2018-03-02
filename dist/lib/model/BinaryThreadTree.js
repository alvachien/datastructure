"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryThreadTag;
(function (BinaryThreadTag) {
    BinaryThreadTag[BinaryThreadTag["Link"] = 0] = "Link";
    BinaryThreadTag[BinaryThreadTag["Thread"] = 1] = "Thread";
})(BinaryThreadTag = exports.BinaryThreadTag || (exports.BinaryThreadTag = {}));
;
var BinaryThreadTreeNode = /** @class */ (function () {
    function BinaryThreadTreeNode() {
    }
    BinaryThreadTreeNode.prototype.constructore = function () {
        this._left = undefined;
        this._right = undefined;
    };
    Object.defineProperty(BinaryThreadTreeNode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryThreadTreeNode.prototype, "Left", {
        get: function () {
            return this._left;
        },
        set: function (left) {
            this._left = left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryThreadTreeNode.prototype, "LeftTag", {
        get: function () {
            return this._lefttag;
        },
        set: function (lt) {
            this._lefttag = lt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryThreadTreeNode.prototype, "Right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            this._right = right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryThreadTreeNode.prototype, "RightTag", {
        get: function () {
            return this._righttag;
        },
        set: function (rt) {
            this._righttag = rt;
        },
        enumerable: true,
        configurable: true
    });
    return BinaryThreadTreeNode;
}());
exports.BinaryThreadTreeNode = BinaryThreadTreeNode;
var BinaryThreadTree = /** @class */ (function () {
    function BinaryThreadTree() {
    }
    Object.defineProperty(BinaryThreadTree.prototype, "Root", {
        get: function () {
            return this._root;
        },
        set: function (root) {
            this._root = root;
        },
        enumerable: true,
        configurable: true
    });
    BinaryThreadTree.prototype.InorderTraversal = function () {
        var arRst = new Array();
        if (this._root !== null) {
            this.InorderImpl(this._root, arRst);
        }
        return arRst;
    };
    BinaryThreadTree.prototype.InorderImpl = function (curNode, arRst) {
        if (curNode !== null) {
            this.InorderImpl(curNode.Left, arRst);
            arRst.push(curNode);
            this.InorderImpl(curNode.Right, arRst);
        }
    };
    BinaryThreadTree.prototype.PreorderTraversal = function () {
        var arRst = new Array();
        if (this._root !== null) {
            this.PreorderImpl(this._root, arRst);
        }
        return arRst;
    };
    BinaryThreadTree.prototype.PreorderImpl = function (curNode, arRst) {
        if (curNode !== null) {
            arRst.push(curNode);
            this.PreorderImpl(curNode.Left, arRst);
            this.PreorderImpl(curNode.Right, arRst);
        }
    };
    BinaryThreadTree.prototype.PostorderTraversal = function () {
        var arRst = new Array();
        if (this._root !== null) {
            this.PostorderImpl(this._root, arRst);
        }
        return arRst;
    };
    BinaryThreadTree.prototype.PostorderImpl = function (curNode, arRst) {
        if (curNode !== null) {
            this.PostorderImpl(curNode.Left, arRst);
            this.PostorderImpl(curNode.Right, arRst);
            arRst.push(curNode);
        }
    };
    BinaryThreadTree.prototype.InsertNode = function (parNode, data) {
        if (parNode === null && this._root !== null) {
            return null;
        }
        if (parNode === null) {
            var node = new BinaryThreadTreeNode();
            node.Data = data;
            this._root = node;
            return this._root;
        }
        if (parNode.Left !== null && parNode.Right !== null) {
            // Parent node is full, cannot add!
            return null;
        }
        var nnode = new BinaryThreadTreeNode();
        nnode.Data = data;
        if (parNode.Left === null) {
            parNode.Left = nnode;
        }
        else if (parNode.Right === null) {
            parNode.Right = nnode;
        }
        return nnode;
    };
    BinaryThreadTree.prototype.FindNode = function (elem) {
        if (this._root === null) {
            return null;
        }
        var arNodes = this.PreorderTraversal();
        for (var _i = 0, arNodes_1 = arNodes; _i < arNodes_1.length; _i++) {
            var nod = arNodes_1[_i];
            if (nod.Data === elem) {
                return nod;
            }
        }
    };
    return BinaryThreadTree;
}());
exports.BinaryThreadTree = BinaryThreadTree;
//# sourceMappingURL=BinaryThreadTree.js.map