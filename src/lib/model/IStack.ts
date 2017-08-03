/**
 * @license
  * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: IStack.ts
 * 
 */

// Stack stands for LIFO
export interface IStack<T> {
    /**
     * The length of the whole stack
     */
    Length(): number;

    /**
     * Is empty? true means it is empty
     */
    IsEmpty(): boolean;

    /**
     * Push the  element at the top of the stack, returns the result: true means success
     * @param elem the element to be inserted.
     */
    Push(elem: T): boolean;

    /**
     * Peek the top element without remove it, returns the top element.
     */
    Peek(): T;

    /**
     * Pop the element and remove it from the stack, returns the poped element.
     */
    Pop(): T;

    /**
     * Clear all elements, returns the result: true means suces
     */
    ClearAll(): boolean;
}
