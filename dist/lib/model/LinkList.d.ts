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
import { IList } from './IList';
/**
 * Node in Link list
 */
export declare class LinkListNode<T> {
    private _data;
    private _next;
    /**
     * Constructor
     */
    constructor();
    get Data(): T;
    set Data(data: T);
    get Next(): LinkListNode<T> | null;
    set Next(next: LinkListNode<T> | null);
}
/**
 * Link list
 */
export declare class LinkList<T> implements IList<T> {
    private _head;
    private _length;
    private _cursor;
    /**
     * Constructor
     */
    constructor();
    next(...args: [] | [undefined]): IteratorResult<T>;
    [Symbol.iterator](): IterableIterator<T>;
    return?(value?: any): IteratorResult<T, any>;
    throw?(e?: any): IteratorResult<T, any>;
    /**
     * Head
     */
    get Head(): LinkListNode<T> | null;
    /**
     * Initialize the list
     * @param hval Head value
     */
    InitList(hval: T): void;
    /**
     * Length
     */
    Length(): number;
    /**
     * Is empty
     */
    IsEmpty(): boolean;
    /**
     * Get element
     * @param index index of element
     */
    GetElement(index: number): T | null;
    /**
     * Insert an element
     * @param index Index to insert
     * @param elem Element to insert
     */
    InsertElement(index: number, elem: T): boolean;
    /**
     * Append element
     * @param elem Element to append
     */
    AppendElement(elem: T): number;
    /**
     * Delete an element
     * @param index Index to delete
     */
    DeleteElement(index: number): boolean;
    /**
     * Clear all elements
     */
    ClearAll(): boolean;
    /**
     * Print out full array
     * @param splitter Splitter
     */
    Print(splitter?: string): string;
    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    IsExist(val: T): boolean;
}
