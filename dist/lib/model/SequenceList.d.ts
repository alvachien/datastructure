/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceList.ts
 *
 */
import { IList } from './IList';
/**
 * Sequence List
 */
export declare class SequenceList<T> implements IList<T> {
    private _data;
    /**
     * Constructor
     */
    constructor();
    /**
     * Initialize the whole list
     */
    InitList(): void;
    /**
     * Check the list is empty or not
     */
    IsEmpty(): boolean;
    /**
     * Clean the whole list
     */
    ClearAll(): boolean;
    /**
     * Get the element at the specified index, return null if not found
     * @param index index
     */
    GetElement(index: number): T | null;
    /**
     * Insert the element at the specified index
     * @param index Specified index for insert
     * @param elem New element for insert
     */
    InsertElement(index: number, elem: T): boolean;
    /**
     * Append the element to the list
     * @param elem Element to append
     */
    AppendElement(elem: T): number;
    /**
     * Delete the element from the list
     * @param index Specified index
     */
    DeleteElement(index: number): boolean;
    /**
     * Length of the list
     */
    Length(): number;
    /**
     * Print out the whole list into string
     */
    Print(splitter?: string): string;
    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    IsExist(val: T): boolean;
}
