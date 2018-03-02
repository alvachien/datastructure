/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.ts
 *
 */
import { IStack } from './IStack';
export declare class SequenceStack<T> implements IStack<T> {
    constructor();
    private _data;
    Length(): number;
    IsEmpty(): boolean;
    Push(elem: T): boolean;
    Pop(): T | null;
    Peek(): T | null;
    ClearAll(): boolean;
}
