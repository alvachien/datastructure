/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.ts
 *
 * A static (array-backed) linked list. A fixed-size array of nodes is used;
 * each node carries a `Cursor` that points to the index of the next node.
 *
 * Convention (common for static link lists):
 *   - `_data[0]` is the *free list* header; `_data[0].Cursor` is the index
 *     of the first free slot (or -1 when the pool is exhausted).
 *   - The list's logical head lives at `_data[1]`; `_data[1].Cursor` is the
 *     index of the first real element (or -1 when the list is empty).
 *   - Real elements occupy indices `[2 .. capacity-1]`.
 */
import { IList } from './IList';
/**
 * Node in static link list
 */
export declare class StaticLinkListNode<T> {
    private _data;
    private _cursor;
    get Data(): T | null;
    set Data(data: T | null);
    get Cursor(): number;
    set Cursor(cur: number);
}
export declare class StaticLinkList<T> implements IList<T> {
    private static readonly HeaderIndex;
    private static readonly HeadIndex;
    private static readonly DefaultCapacity;
    private _data;
    private _length;
    private _cursor;
    constructor(capacity?: number);
    private initFreeList;
    /**
     * Allocate a node index from the free list. Returns -1 if the pool is
     * exhausted.
     */
    private malloc;
    /**
     * Return a node index to the free list.
     */
    private free;
    next(...args: [] | [undefined]): IteratorResult<T>;
    [Symbol.iterator](): IterableIterator<T>;
    return?(value?: any): IteratorResult<T, any>;
    throw?(e?: any): IteratorResult<T, any>;
    Length(): number;
    IsEmpty(): boolean;
    ClearAll(): boolean;
    /**
     * Get the element at the specified zero-based position; null if out of range.
     * @param index zero-based position
     */
    GetElement(index: number): T | null;
    /**
     * Insert the element at the specified zero-based index; index === length
     * appends to the tail. Returns false if the index is out of range or the
     * pool is exhausted.
     * @param index zero-based position
     * @param elem element to insert
     */
    InsertElement(index: number, elem: T): boolean;
    /**
     * Append the element to the tail of the list. Returns the new length, or
     * -1 if the pool is exhausted.
     */
    AppendElement(elem: T): number;
    /**
     * Remove the element at the specified zero-based position.
     * @param index zero-based position
     */
    DeleteElement(index: number): boolean;
    /**
     * Print all elements joined by `splitter` (default ',').
     */
    Print(splitter?: string): string;
}
