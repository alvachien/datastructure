/**
 * Algorithm.ts
 * (C) Copyright, Alva Chien
 * 
 * This file try to provide a set of algorithm
 * Including:
 * 1. KMP
 * 2. Sorting algorithms
 *  2.1 Insert sort
 *  2.2 Bubble sort
 *  2.3 Quick sort
 *  2.4 
 * 3. Others
 * 
 */

function KMP_MakeNext(arr: string) : number[] {
    let q : number  = 0;
    let k: number = 0;
    let len: number = 0;
    len = arr.length;
    let next: number[] = [];

    next.push(0);
    for(q = 1, k = 0; q < len; ++q) {
        while(k > 0 && arr.charAt(q) !== arr.charAt(k)) {
            k = next[k-1];
        }

        if (arr.charAt(q) === arr.charAt(k)) {
            k++;
        }

        next[q] = k;
    }

    return next;
}

/**
 * KMP searching
 * @param arr1 Source string
 * @param arr2 Target string
 */
export function KMP(arr1: string, arr2: string): number | null {
    let n: number = arr1.length;
    let m: number = arr2.length;
    let next: number[] = KMP_MakeNext(arr2);

    for(let i = 0, q = 0; i < n; ++i) {
        while (q > 0 && arr2.charAt(q) !== arr1.charAt(i)) {
            q = next[q - 1];
        }

        if (arr2.charAt(q) === arr1.charAt(i)) {
            q ++;
        }

        if (q === m) {
            return i - m + 1;
        }
    }

    return null;
}

/**
 * Insertion sort: an in-place sorting
 * @param datalist: data list for sorting
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export function InsertionSort<T>(datalist: T[]): boolean {
    if (datalist.length <= 0) {
        return false;
    }

    for(let i = 1; i < datalist.length; i++) {
        InsertionSort_Insert(datalist, i);
    }
    return true;
}

function InsertionSort_Insert<T>(datalist: T[], idx: number) {
    let tmp: T = datalist[idx];
    let j: number = idx;

    while(j > 0 && tmp < datalist[j - 1]) {
        datalist[j] = datalist[j - 1];
        j --;
    }

    datalist[j] = tmp;
}

/**
 * Binary insertion sort: an in-place sorting by using binary searching
 * @param datalist: data list for sorting
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export function BinaryInsertSort<T>(datalist: T[]): boolean {
    if (datalist.length <= 0) {
        return false;
    }

    for(let i = 1; i < datalist.length; i++) {
        BinaryInsertSort_Insert(datalist, i);
    }

    return true;
}

function BinaryInsertSort_Insert<T>(datalist: T[], idx: number) {
    let tmp: T = datalist[idx];
    let left: number = 0;
    let right: number = idx - 1;

    while(left <= right) {
        let middle: number = Math.floor((left + right) / 2);
        if (tmp < datalist[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    for(let k = idx - 1; k >= left; k --) {
        datalist[k + 1] = datalist[k];            
    }

    datalist[left] = tmp;
}

/**
 * Bubble sort: an in-place exchange sort
 * @param datalist: data list for sorting
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export function BubbleSort<T>(datalist: T[]): boolean {
    if (datalist.length <= 0) {
        return false;
    }

    return true;
}