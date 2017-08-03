/**
 * @license
  * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: IList.ts
 *
 */

export interface IList<T> {
    /**
     * The length of the whole list
     */
    Length(): number;

    /**
     * Is empty? true means it is empty
     */
    IsEmpty(): boolean;

    /**
     * Get element out from a specified position, null stands for failure
     * @param index zero-based position.
     */
    GetElement(index: number): T | null;

    /**
     * Insert element at the specified zero-based position, returns the result: true means success
     * @param index zero-based position.
     * @param elem the element to be inserted.
     */
    InsertElement(index: number, elem: T): boolean;

    /**
     * Append the element to the tail of the list, returns the new length of the whole list
     * @param elem the element to be appened.
     */
    AppendElement(elem: T): number;

    /**
     * Remove element at the specified zero-based position, returns the result: true means success
     * @param index zero-based position.
     */
    DeleteElement(index: number): boolean;

    /**
     * Clear all elements, returns the result: true means suces
     */
    ClearAll(): boolean;

    /**
     * Print all elements
     */
    Print(): string;
}
