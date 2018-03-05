"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkStack.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var LinkStackNode = /** @class */ (function () {
    function LinkStackNode() {
    }
    LinkStackNode.prototype.constructore = function () {
        this._next = undefined;
    };
    Object.defineProperty(LinkStackNode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkStackNode.prototype, "Next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: true,
        configurable: true
    });
    return LinkStackNode;
}());
exports.LinkStackNode = LinkStackNode;
var LinkStack = /** @class */ (function () {
    function LinkStack() {
        this._length = 0;
        this._head = undefined;
    }
    Object.defineProperty(LinkStack.prototype, "Head", {
        /**
         * Head
         */
        get: function () {
            return this._head;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Length of the stack
     */
    LinkStack.prototype.Length = function () {
        return this._length;
    };
    /**
     * Is empty
     */
    LinkStack.prototype.IsEmpty = function () {
        return this._length === 0;
    };
    /**
     * Push new element, return the new length
     * @param elem Element to push
     */
    LinkStack.prototype.Push = function (elem) {
        if (this._head === undefined) {
            this._head = new LinkStackNode();
            this._head.Data = elem;
            return this._length++;
        }
        var node = new LinkStackNode();
        node.Next = this._head;
        this._head = node;
        return this._length++;
    };
    /**
     * Pop an item out
     */
    LinkStack.prototype.Pop = function () {
        if (this._head === undefined) {
            return undefined;
        }
        var pi = this._head.Data;
        this._head = this._head.Next;
        this._length--;
        return pi;
    };
    /**
     * Peek the first element
     */
    LinkStack.prototype.Peek = function () {
        if (this._head === undefined) {
            return undefined;
        }
        return this._head.Data;
    };
    /**
     * Clear all
     */
    LinkStack.prototype.ClearAll = function () {
        this._head = undefined;
        this._length = 0;
        return true;
    };
    return LinkStack;
}());
exports.LinkStack = LinkStack;
//# sourceMappingURL=LinkStack.js.map