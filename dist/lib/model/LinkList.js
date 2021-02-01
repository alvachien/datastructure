"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkList.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = exports.LinkListNode = void 0;
/**
 * Node in Link list
 */
var LinkListNode = /** @class */ (function () {
    /**
     * Constructor
     */
    function LinkListNode() {
        this._next = null;
    }
    Object.defineProperty(LinkListNode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkListNode.prototype, "Next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: false,
        configurable: true
    });
    return LinkListNode;
}());
exports.LinkListNode = LinkListNode;
/**
 * Link list
 */
var LinkList = /** @class */ (function () {
    /**
     * Constructor
     */
    function LinkList() {
        this._head = null;
        this._length = 0;
    }
    Object.defineProperty(LinkList.prototype, "Head", {
        /**
         * Head
         */
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initialize the list
     * @param hval Head value
     */
    LinkList.prototype.InitList = function (hval) {
        this._head = new LinkListNode();
        this._head.Data = hval;
        this._length = 1;
    };
    /**
     * Length
     */
    LinkList.prototype.Length = function () {
        return this._length;
    };
    /**
     * Is empty
     */
    LinkList.prototype.IsEmpty = function () {
        return this._length === 0;
    };
    /**
     * Get element
     * @param index index of element
     */
    LinkList.prototype.GetElement = function (index) {
        if (this._length === 0
            || this._head === null
            || index < 0
            || index >= this._length) {
            return null;
        }
        var cur = this._head;
        var i = 0;
        while (cur !== null && i < index) {
            cur = cur.Next;
            i++;
        }
        return cur.Data;
    };
    /**
     * Insert an element
     * @param index Index to insert
     * @param elem Element to insert
     */
    LinkList.prototype.InsertElement = function (index, elem) {
        if (index < 0 || index > this._length || this._head === null
            || elem === null) {
            return false;
        }
        if (index === 0) {
            var nnode_1 = new LinkListNode();
            nnode_1.Data = elem;
            nnode_1.Next = this._head;
            this._head = nnode_1;
            this._length++;
            return true;
        }
        var cur = this._head;
        var i = 1;
        while (cur !== null && i < index) {
            cur = cur.Next;
            i++;
        }
        var nnode = new LinkListNode();
        nnode.Data = elem;
        nnode.Next = cur.Next;
        cur.Next = nnode;
        this._length++;
        return true;
    };
    /**
     * Append element
     * @param elem Element to append
     */
    LinkList.prototype.AppendElement = function (elem) {
        if (this._head === null || this._length <= 0) {
            throw new Error('Invalid list');
        }
        var cur = this._head;
        while (cur.Next !== null) {
            cur = cur.Next;
        }
        var newnode = new LinkListNode();
        newnode.Data = elem;
        newnode.Next = null;
        cur.Next = newnode;
        return ++this._length;
    };
    /**
     * Delete an element
     * @param index Index to delete
     */
    LinkList.prototype.DeleteElement = function (index) {
        if (index < 0 || index > this._length || this._head === null) {
            return false;
        }
        if (index === 0) {
            this._head = this._head.Next;
            this._length--;
            if (this._length === 0) {
                this._head = null;
            }
            return true;
        }
        var cur = this._head;
        var i = 1;
        while (cur !== null && i < index) {
            cur = cur.Next;
            i++;
        }
        cur.Next = cur.Next.Next;
        this._length--;
        return true;
    };
    /**
     * Clear all elements
     */
    LinkList.prototype.ClearAll = function () {
        this._head = null;
        this._length = 0;
        return true;
    };
    /**
     * Print out full array
     * @param splitter Splitter
     */
    LinkList.prototype.Print = function (splitter) {
        if (this._length === 0 || this._head === null) {
            return '';
        }
        var ar = [];
        var cur = this._head;
        ar.push(cur.Data);
        while (cur.Next !== null) {
            cur = cur.Next;
            ar.push(cur.Data);
        }
        return ar.join(splitter);
    };
    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    LinkList.prototype.IsExist = function (val) {
        var cur = this._head;
        if (cur.Data === val) {
            return true;
        }
        while (cur.Next !== null) {
            cur = cur.Next;
            if (cur.Data === val) {
                return true;
            }
        }
        return false;
    };
    return LinkList;
}());
exports.LinkList = LinkList;
//# sourceMappingURL=LinkList.js.map