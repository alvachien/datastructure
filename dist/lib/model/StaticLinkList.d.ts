/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.ts
 *
 */
import { IList } from './IList';
/**
 * Node in static link list
 */
export declare class StaticLinkListNode<T> {
    private _data;
    private _cursor;
    constructore(): void;
    get Data(): T;
    set Data(data: T);
    get Cursor(): number;
    set Cursor(cur: number);
}
export declare class StaticLinkList<T> implements IList<T> {
    private _data;
    private _cursor;
    next(...args: [] | [undefined]): IteratorResult<T>;
    [Symbol.iterator](): IterableIterator<T>;
    return?(value?: any): IteratorResult<T, any>;
    throw?(e?: any): IteratorResult<T, any>;
    /**
     * Constructor
     */
    constructor();
    Length(): number;
    IsEmpty(): boolean;
    ClearAll(): boolean;
    GetElement(index: number): T | null;
    InsertElement(index: number, elem: T): boolean;
    AppendElement(elem: T): number;
    DeleteElement(index: number): boolean;
    Print(): string;
}
