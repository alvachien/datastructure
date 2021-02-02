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
export class LinkStackNode {
    constructor() {
        this._next = null;
    }
    get Data() {
        return this._data;
    }
    set Data(data) {
        this._data = data;
    }
    get Next() {
        return this._next;
    }
    set Next(next) {
        this._next = next;
    }
}
export class LinkStack {
    constructor() {
        this._head = null;
        this._length = 0;
        this._head = null;
    }
    /**
     * Head
     */
    get Head() {
        return this._head;
    }
    /**
     * Length of the stack
     */
    Length() {
        return this._length;
    }
    /**
     * Is empty
     */
    IsEmpty() {
        return this._length === 0;
    }
    /**
     * Push new element, return the new length
     * @param elem Element to push
     */
    Push(elem) {
        if (this._head === null) {
            this._head = new LinkStackNode();
            this._head.Data = elem;
            return this._length++;
        }
        const node = new LinkStackNode();
        node.Data = elem;
        node.Next = this._head;
        this._head = node;
        return this._length++;
    }
    /**
     * Pop an item out
     */
    Pop() {
        if (this._head === null) {
            return null;
        }
        const pi = this._head.Data;
        this._head = this._head.Next;
        this._length--;
        return pi;
    }
    /**
     * Peek the first element
     */
    Peek() {
        if (this._head === null) {
            return null;
        }
        return this._head.Data;
    }
    /**
     * Clear all
     */
    ClearAll() {
        this._head = null;
        this._length = 0;
        return true;
    }
}
//# sourceMappingURL=LinkStack.js.map