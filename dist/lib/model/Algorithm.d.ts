/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Algorithm.ts
 *
 * This file try to provide a set of algorithm
 * Including:
 * 1. Utility functions
 *  1.1 Swap elements
 * 2. KMP
 * 3. Sorting algorithms
 *  3.1 Insert sort
 *  3.2 Bubble sort
 *  3.3 Quick sort
 *  3.4 Selection sort
 *  3.5 Counting sort
 *  3.6 Merge sort
 *  3.7 Heap sort
 * 4. Others
 *
 */
/**
 * SwapElement: Unitity method, used to swap two elements in an array
 * @param datalist : data array
 * @param i : index of the first element
 * @param j : index of the second element
 */
export declare function SwapElement<T>(datalist: T[], i: number, j: number): void;
/**
 * KMP searching
 * @param arr1 Source string
 * @param arr2 Target string
 */
export declare function KMP(arr1: string, arr2: string): number | null;
/**
 * Insertion sort: an in-place sorting
 * @param datalist: data list for sorting
 *
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export declare function InsertionSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): boolean;
/**
 * Binary insertion sort: an in-place sorting by using binary searching
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 *
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export declare function BinaryInsertSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): boolean;
/**
 * Bubble sort: an in-place exchange sort
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 *
 * Two nested loops through the list:
 * First loop through 0 .. length - 1
 *  Second loop through available elements (length - 1 - i)
 *  Compare the two elements, exchange the larger one to higher position.
 */
export declare function BubbleSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): boolean;
/**
 * Quick sort: an in-place exchange sort
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 *
 * The core method of quick sort is the recursive.
 * Choose one number, split the whole array to two arrays: one all smaller than that number, the other all larger than it.
 * Then recursively process the two new arrays with the same idea.
 */
export declare function QuickSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): boolean;
/**
 * Selection sort: an in-place sorting
 * @param datalist data list for sorting
 * @param compareFn Compare function
 *
 * The idea for selection sort is, choose the min (or max) from un-sorted part, and append it to the sorted part
 */
export declare function SelectionSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): boolean;
/**
 * Counting sort
 * @param datalist: data list for sorting
 * @param max: maximum
 *
 * The idea behind is, build an array for all possible values, the element of the list are map to that huge array with correct position.
 */
export declare function CountingSort(datalist: number[]): void;
/**
 * Merge sorting
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 */
export declare function MergeSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): void;
/**
 * Heap sort
 * @param datalist data list
 * @param compareFn Compare function
 *
 * The heap sort will struct the unsorted part as a maximum (or minimum) tree, and fetch the root node to the sort part.
 * Via this way, the array got sorted
 */
export declare function HeapSort<T>(datalist: T[], compareFn?: (a: T, b: T) => number): void;
