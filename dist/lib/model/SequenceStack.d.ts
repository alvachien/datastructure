/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.ts
 *
 */
import { IStack } from './IStack';
/**
 * Sequence Stack
 */
export declare class SequenceStack<T> implements IStack<T> {
    private _data;
    /**
     * Constructor
     */
    constructor();
    /**
     * Length
     */
    Length(): number;
    /**
     * Is empty
     */
    IsEmpty(): boolean;
    /**
     * Push
     * @param elem Element to push
     */
    Push(elem: T): number;
    /**
     * Pop an element
     *
     */
    Pop(): T | undefined;
    /**
     * Peek the stack
     */
    Peek(): T | null;
    /**
     * Clear all
     */
    ClearAll(): boolean;
}
