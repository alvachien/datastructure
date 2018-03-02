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
    constructore(): void;
    Data: T;
    Next: LinkListNode<T>;
}
/**
 * Link list
 */
export declare class LinkList<T> implements IList<T> {
    private _head;
    private _length;
    /**
     * Constructor
     */
    constructor();
    Length(): number;
    IsEmpty(): boolean;
    GetElement(index: number): T | null;
    InsertElement(index: number, elem: T): boolean;
    AppendElement(elem: T): number;
    DeleteElement(index: number): boolean;
    ClearAll(): boolean;
    Print(): string;
}
