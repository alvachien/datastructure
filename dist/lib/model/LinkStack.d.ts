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
    constructore(): void;
    Data: T;
    Next: LinkStackNode<T>;
}
export declare class LinkStack<T> implements IStack<T> {
    private _head;
    private _length;
    constructor();
    Length(): number;
    IsEmpty(): boolean;
    Push(elem: T): boolean;
    Pop(): T | null;
    Peek(): T | null;
    ClearAll(): boolean;
}
