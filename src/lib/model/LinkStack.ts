/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkStack.ts
 *
 */

import { IStack } from './IStack';

export class LinkStackNode<T> {
    private _data: T;
    private _next: LinkStackNode<T> = null;

    constructore() {
        this._next = null;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
    get Next(): LinkStackNode<T> {
        return this._next;
    }
    set Next(next: LinkStackNode<T>) {
        this._next = next;
    }
}

export class LinkStack<T> implements IStack<T> {
    private _head: LinkStackNode<T> = null;
    private _length = 0;

    constructor() {
        //this._head = new LinkStackNode<T>();
    }

    public Length(): number {
        return this._length;
    }

    public IsEmpty(): boolean {
        return this._length === 0;
    }

    public Push(elem: T): boolean {
        if (this._head === null) {
            this._head = new LinkStackNode<T>();
            this._head.Data = elem;
            return true;
        }

        const node: LinkStackNode<T> = new LinkStackNode<T>();
        node.Next = this._head;
        this._head = node;

        return true;
    }

    public Pop(): T | null {
        if (this._head === null) {
            return null;
        }

        const pi : T = this._head.Data;

        this._head = this._head.Next;

        return pi;
    }

    public Peek(): T | null {
        if (this._head === null) {
            return null;
        }

        return this._head.Data;
    }

    public ClearAll() : boolean {
        this._head = new LinkStackNode<T>();
        this._length = 0;
        return true;
    }
}
