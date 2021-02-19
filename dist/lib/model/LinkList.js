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
/**
 * Node in Link list
 */
export class LinkListNode {
    /**
     * Constructor
     */
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
/**
 * Link list
 */
export class LinkList {
    /**
     * Constructor
     */
    constructor() {
        this._head = null;
        this._length = 0;
        this._cursor = undefined;
    }
    next(...args) {
        if (this._cursor === undefined) {
            this._cursor = this._head;
        }
        if (this._cursor !== null) {
            let rtn = {
                done: false,
                value: this._cursor.Data
            };
            this._cursor = this._cursor.Next;
            return rtn;
        }
        else {
            this._cursor = undefined;
            return {
                done: true,
                value: undefined
            };
        }
    }
    [Symbol.iterator]() {
        return this;
    }
    return(value) {
        throw new Error('Method not implemented.');
    }
    throw(e) {
        throw new Error('Method not implemented.');
    }
    /**
     * Head
     */
    get Head() {
        return this._head;
    }
    /**
     * Initialize the list
     * @param hval Head value
     */
    InitList(hval) {
        this._head = new LinkListNode();
        this._head.Data = hval;
        this._length = 1;
    }
    /**
     * Length
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
     * Get element
     * @param index index of element
     */
    GetElement(index) {
        if (this._length === 0
            || this._head === null
            || index < 0
            || index >= this._length) {
            return null;
        }
        let cur = this._head;
        let i = 0;
        while (cur !== null && i < index) {
            cur = cur.Next;
            i++;
        }
        return cur.Data;
    }
    /**
     * Insert an element
     * @param index Index to insert
     * @param elem Element to insert
     */
    InsertElement(index, elem) {
        if (index < 0 || index > this._length || this._head === null
            || elem === null) {
            return false;
        }
        if (index === 0) {
            let nnode = new LinkListNode();
            nnode.Data = elem;
            nnode.Next = this._head;
            this._head = nnode;
            this._length++;
            return true;
        }
        let cur = this._head;
        let i = 1;
        while (cur !== null && i < index) {
            cur = cur.Next;
            i++;
        }
        let nnode = new LinkListNode();
        nnode.Data = elem;
        nnode.Next = cur.Next;
        cur.Next = nnode;
        this._length++;
        return true;
    }
    /**
     * Append element
     * @param elem Element to append
     */
    AppendElement(elem) {
        if (this._head === null || this._length <= 0) {
            throw new Error('Invalid list');
        }
        let cur = this._head;
        while (cur.Next !== null) {
            cur = cur.Next;
        }
        let newnode = new LinkListNode();
        newnode.Data = elem;
        newnode.Next = null;
        cur.Next = newnode;
        return ++this._length;
    }
    /**
     * Delete an element
     * @param index Index to delete
     */
    DeleteElement(index) {
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
        let cur = this._head;
        let i = 1;
        while (cur !== null && i < index) {
            cur = cur.Next;
            i++;
        }
        cur.Next = cur.Next.Next;
        this._length--;
        return true;
    }
    /**
     * Clear all elements
     */
    ClearAll() {
        this._head = null;
        this._length = 0;
        return true;
    }
    /**
     * Print out full array
     * @param splitter Splitter
     */
    Print(splitter) {
        if (this._length === 0 || this._head === null) {
            return '';
        }
        let ar = [];
        let cur = this._head;
        ar.push(cur.Data);
        while (cur.Next !== null) {
            cur = cur.Next;
            ar.push(cur.Data);
        }
        return ar.join(splitter);
    }
    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    IsExist(val) {
        let cur = this._head;
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
    }
}
//# sourceMappingURL=LinkList.js.map