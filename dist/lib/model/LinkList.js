"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkList.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Node in Link list
 */
var LinkListNode = /** @class */ (function () {
    function LinkListNode() {
    }
    /**
     * Constructor
     */
    LinkListNode.prototype.constructore = function () {
        this._next = undefined;
    };
    Object.defineProperty(LinkListNode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkListNode.prototype, "Next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: true,
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
        this._head = new LinkListNode();
    }
    LinkList.prototype.Length = function () {
        return this._length;
    };
    LinkList.prototype.IsEmpty = function () {
        return this._length === 0;
    };
    LinkList.prototype.GetElement = function (index) {
        if (this._length === 0
            || this._head === null
            || index < 0
            || index >= this._length) {
            return null;
        }
        var cur = this._head;
        for (var i = 0; i < index; i++) {
            if (cur !== null) {
                cur = cur.Next;
            }
        }
        return cur === null ? null : cur.Data;
    };
    LinkList.prototype.InsertElement = function (index, elem) {
        if (index < 0 || index > this._length) {
            return false;
        }
        if (elem === null) {
            return false;
        }
        var cur = this._head;
        var i = 0;
        while (cur !== null && i++ < index) {
            cur = cur.Next;
        }
        var nnode = new LinkListNode();
        nnode.Data = elem;
        nnode.Next = cur.Next;
        cur.Next = nnode;
        this._length++;
        return true;
    };
    LinkList.prototype.AppendElement = function (elem) {
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
    LinkList.prototype.DeleteElement = function (index) {
        if (index < 0 || index > this._length) {
            return false;
        }
        var cur = this._head;
        if (index === 0) {
            this._head = cur.Next;
            this._length--;
            return true;
        }
        var i = 0;
        while (cur != null && i < index - 1) {
            cur = cur.Next;
        }
        cur.Next = cur.Next.Next;
        this._length--;
        return true;
    };
    LinkList.prototype.ClearAll = function () {
        this._head = null;
        this._length = 0;
        return true;
    };
    LinkList.prototype.Print = function () {
        // TBD
        return '';
    };
    return LinkList;
}());
exports.LinkList = LinkList;
//# sourceMappingURL=LinkList.js.map