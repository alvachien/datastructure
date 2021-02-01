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
import { IStack } from './IStack';
export declare class LinkStackNode<T> {
    private _data;
    private _next;
    constructor();
    get Data(): T;
    set Data(data: T);
    get Next(): LinkStackNode<T> | null;
    set Next(next: LinkStackNode<T> | null);
}
export declare class LinkStack<T> implements IStack<T> {
    private _head;
    private _length;
    constructor();
    /**
     * Head
     */
    get Head(): LinkStackNode<T> | null;
    /**
     * Length of the stack
     */
    Length(): number;
    /**
     * Is empty
     */
    IsEmpty(): boolean;
    /**
     * Push new element, return the new length
     * @param elem Element to push
     */
    Push(elem: T): number;
    /**
     * Pop an item out
     */
    Pop(): T | null;
    /**
     * Peek the first element
     */
    Peek(): T | null;
    /**
     * Clear all
     */
    ClearAll(): boolean;
}
