/**
 * @license
  * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkList.ts
 *
 */

import { IList } from './IList';

/**
 * Node in Link list
 */
export class LinkListNode<T> {
    private _data: T;
    private _next: LinkListNode<T> = null;

    /**
     * Constructor
     */
    constructore() {
        this._next = null;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
    get Next(): LinkListNode<T> {
        return this._next;
    }
    set Next(next: LinkListNode<T>) {
        this._next = next;
    }
}

/**
 * Link list
 */
export class LinkList<T> implements IList<T> {
    private _head: LinkListNode<T> = null;
    private _length = 0;

    /**
     * Constructor
     */
    constructor() {
        this._head = new LinkListNode<T>();
    }

    public Length(): number {
        return this._length;
    }

    public IsEmpty(): boolean {
        return this._length === 0;
    }

    public GetElement(index: number): T | null {
        if (this._length === 0
            || this._head === null
            || index < 0
            || index >= this._length) {
            return null;
        }


        let cur = this._head;
        for (let i = 0; i < index; i ++) {
            if (cur !== null) {
                cur = cur.Next;
            }
        }

        return cur === null ? null : cur.Data;
    }

    public InsertElement(index: number, elem: T): boolean {
        if (index < 0 || index > this._length) {
            return false;
        }
        if (elem === null) {
            return false;
        }

        let cur: LinkListNode<T> = this._head;
        let i = 0;
        while (cur !== null && i++ < index) {
            cur = cur.Next;
        }

        const nnode: LinkListNode<T> = new LinkListNode<T>();
        nnode.Data = elem;
        nnode.Next = cur.Next;
        cur.Next = nnode;
        this._length++;

        return true;
    }

    public AppendElement(elem: T) : number {
        let cur: LinkListNode<T> = this._head;
        while (cur.Next !== null) {
            cur = cur.Next;
        }

        const newnode = new LinkListNode<T>();
        newnode.Data = elem;
        newnode.Next = null;

        cur.Next = newnode;

        return ++this._length;
    }

    public DeleteElement(index: number): boolean {
        if (index < 0 || index > this._length) {
            return false;
        }

        let cur: LinkListNode<T> = this._head;
        if (index === 0) {
            this._head = cur.Next;
            this._length --;
            return true;
        }

        const i = 0;
        while (cur != null && i < index - 1) {
            cur = cur.Next;
        }

        cur.Next = cur.Next.Next;
        this._length--;

        return true;
    }

    public ClearAll(): boolean {
        this._head = null;
        this._length = 0;
        return true;
    }

    public Print(): string {
        // TBD
        return '';
    }
}
