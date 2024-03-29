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
/* 1. Utility functions */
/**
 * SwapElement: Unitity method, used to swap two elements in an array
 * @param datalist : data array
 * @param i : index of the first element
 * @param j : index of the second element
 */
export function SwapElement(datalist, i, j) {
    if (datalist.length <= 0
        || i === j
        || i >= datalist.length
        || j > datalist.length) {
        return;
    }
    const tmp = datalist[i];
    datalist[i] = datalist[j];
    datalist[j] = tmp;
}
/* 2. KMP */
function KMP_MakeNext(arr) {
    let q = 0;
    let k = 0;
    let len = 0;
    len = arr.length;
    const next = [];
    next.push(0);
    for (q = 1, k = 0; q < len; ++q) {
        while (k > 0 && arr.charAt(q) !== arr.charAt(k)) {
            k = next[k - 1];
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
export function KMP(arr1, arr2) {
    const n = arr1.length;
    const m = arr2.length;
    const next = KMP_MakeNext(arr2);
    for (let i = 0, q = 0; i < n; ++i) {
        while (q > 0 && arr2.charAt(q) !== arr1.charAt(i)) {
            q = next[q - 1];
        }
        if (arr2.charAt(q) === arr1.charAt(i)) {
            q++;
        }
        if (q === m) {
            return i - m + 1;
        }
    }
    return null;
}
/* 2. Sorting */
/**
 * Insertion sort: an in-place sorting
 * @param datalist: data list for sorting
 *
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export function InsertionSort(datalist, compareFn) {
    if (datalist.length <= 0) {
        return false;
    }
    for (let i = 1; i < datalist.length; i++) {
        InsertionSort_Insert(datalist, i, compareFn);
    }
    return true;
}
function InsertionSort_Insert(datalist, idx, compareFn) {
    const tmp = datalist[idx];
    let j = idx;
    if (compareFn !== undefined) {
        while (j > 0 && compareFn(tmp, datalist[j - 1]) < 0) {
            datalist[j] = datalist[j - 1];
            j--;
        }
    }
    else {
        while (j > 0 && tmp < datalist[j - 1]) {
            datalist[j] = datalist[j - 1];
            j--;
        }
    }
    datalist[j] = tmp;
}
/**
 * Binary insertion sort: an in-place sorting by using binary searching
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 *
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
export function BinaryInsertSort(datalist, compareFn) {
    if (datalist.length <= 0) {
        return false;
    }
    for (let i = 1; i < datalist.length; i++) {
        BinaryInsertSort_Insert(datalist, i, compareFn);
    }
    return true;
}
function BinaryInsertSort_Insert(datalist, idx, compareFn) {
    const tmp = datalist[idx];
    let left = 0;
    let right = idx - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (compareFn !== undefined) {
            if (compareFn(tmp, datalist[middle]) < 0) {
                right = middle - 1;
            }
            else {
                left = middle + 1;
            }
        }
        else {
            if (tmp < datalist[middle]) {
                right = middle - 1;
            }
            else {
                left = middle + 1;
            }
        }
    }
    for (let k = idx - 1; k >= left; k--) {
        datalist[k + 1] = datalist[k];
    }
    datalist[left] = tmp;
}
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
export function BubbleSort(datalist, compareFn) {
    if (datalist.length <= 0) {
        return false;
    }
    for (let i = 0; i < datalist.length - 1; i++) {
        for (let j = 0; j < datalist.length - 1 - i; j++) {
            if (compareFn !== undefined) {
                if (compareFn(datalist[j], datalist[j + 1]) > 0) {
                    SwapElement(datalist, j, j + 1);
                }
            }
            else {
                if (datalist[j] > datalist[j + 1]) {
                    SwapElement(datalist, j, j + 1);
                }
            }
        }
    }
    return true;
}
/**
 * Quick sort: an in-place exchange sort
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 *
 * The core method of quick sort is the recursive.
 * Choose one number, split the whole array to two arrays: one all smaller than that number, the other all larger than it.
 * Then recursively process the two new arrays with the same idea.
 */
export function QuickSort(datalist, compareFn) {
    if (datalist.length <= 0) {
        return false;
    }
    QuickSortImpl(datalist, 0, datalist.length - 1, compareFn);
    return true;
}
function QuickSortImpl(datalist, left, right, compareFn) {
    if (left >= right) {
        return;
    }
    let i = left;
    let j = right;
    const key = datalist[left];
    while (i < j) {
        if (compareFn !== undefined) {
            while (i < j && compareFn(key, datalist[j]) <= 0) {
                j--;
            }
        }
        else {
            while (i < j && key <= datalist[j]) {
                j--;
            }
        }
        datalist[i] = datalist[j];
        if (compareFn !== undefined) {
            while (i < j && compareFn(key, datalist[i]) >= 0) {
                i++;
            }
        }
        else {
            while (i < j && key >= datalist[i]) {
                i++;
            }
        }
        datalist[j] = datalist[i];
    }
    datalist[i] = key;
    QuickSortImpl(datalist, left, i - 1, compareFn);
    QuickSortImpl(datalist, i + 1, right, compareFn);
}
/**
 * Selection sort: an in-place sorting
 * @param datalist data list for sorting
 * @param compareFn Compare function
 *
 * The idea for selection sort is, choose the min (or max) from un-sorted part, and append it to the sorted part
 */
export function SelectionSort(datalist, compareFn) {
    if (datalist.length <= 0) {
        return false;
    }
    for (let i = 0; i < datalist.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < datalist.length; j++) {
            if (compareFn !== undefined) {
                if (compareFn(datalist[min], datalist[j]) > 0) {
                    min = j;
                }
            }
            else {
                if (datalist[min] > datalist[j]) {
                    min = j;
                }
            }
        }
        if (min !== i) {
            SwapElement(datalist, min, i);
        }
    }
}
/**
 * Counting sort
 * @param datalist: data list for sorting
 * @param max: maximum
 *
 * The idea behind is, build an array for all possible values, the element of the list are map to that huge array with correct position.
 */
export function CountingSort(datalist) {
    const tmp = [];
    const out = [];
    // Get min and max number in array
    let max = datalist[0];
    let min = max;
    for (let i = 1; i < datalist.length; i++) {
        if (datalist[i] > max) {
            max = datalist[i];
        }
        if (datalist[i] < min) {
            min = datalist[i];
        }
    }
    // Generate tmp[]
    for (let i = 0; i < max - min + 1; i++) {
        tmp.push(0);
    }
    for (let i = 0; i < datalist.length; i++) {
        tmp[datalist[i] - min] += 1;
        out.push(0);
    }
    for (let i = 1; i < max - min + 1; i++) {
        tmp[i] = tmp[i - 1] + tmp[i];
    }
    for (let i = datalist.length - 1; i >= 0; i--) {
        out[tmp[datalist[i] - min] - 1] = datalist[i];
        tmp[datalist[i] - min]--;
    }
    for (let i = 0; i < datalist.length; i++) {
        datalist[i] = out[i];
    }
}
/**
 * Merge sorting
 * @param datalist: data list for sorting
 * @param compareFn Compare function
 */
export function MergeSort(datalist, compareFn) {
    MergeSortImpl(datalist, 0, datalist.length, compareFn);
}
function MergeSortImpl(datalist, begin, end, compareFn) {
    if (end - begin > 1) {
        const mid = Math.floor((begin + end) / 2);
        MergeSortImpl(datalist, begin, mid, compareFn);
        MergeSortImpl(datalist, mid, end, compareFn);
        MergeSortImpl2(datalist, begin, mid, end, compareFn);
    }
}
function MergeSortImpl2(datalist, begin, mid, end, compareFn) {
    const lsize = mid - begin;
    const rsize = end - mid;
    const arLeft = new Array();
    const arRight = new Array();
    let lnow = 0;
    let rnow = 0;
    for (let i = begin; i < mid; i++) {
        arLeft.push(datalist[i]);
    }
    for (let i = mid; i < end; i++) {
        arRight.push(datalist[i]);
    }
    let idx = 0;
    for (idx = 0; lnow < lsize && rnow < rsize; idx++) {
        if (compareFn !== undefined) {
            if (compareFn(arLeft[lnow], arRight[rnow]) > 0) {
                datalist[begin + idx] = arLeft[lnow];
                lnow++;
            }
            else {
                datalist[begin + idx] = arRight[rnow];
                rnow++;
            }
        }
        else {
            if (arLeft[lnow] > arRight[rnow]) {
                datalist[begin + idx] = arLeft[lnow];
                lnow++;
            }
            else {
                datalist[begin + idx] = arRight[rnow];
                rnow++;
            }
        }
    }
    if (lnow === lsize && rnow !== rsize) {
        for (let i = 0; i < (rsize - rnow); i++) {
            datalist[begin + idx + i] = arRight[rnow + i];
        }
    }
    else if (rnow === rsize && lnow !== lsize) {
        for (let i = 0; i < (lsize - lnow); i++) {
            datalist[begin + idx + i] = arLeft[lnow + i];
        }
    }
}
/**
 * Heap sort
 * @param datalist data list
 * @param compareFn Compare function
 *
 * The heap sort will struct the unsorted part as a maximum (or minimum) tree, and fetch the root node to the sort part.
 * Via this way, the array got sorted
 */
export function HeapSort(datalist, compareFn) {
    Heapsort_BuildMaxHeap(datalist, compareFn);
    let heapsize = datalist.length - 1;
    for (let i = datalist.length - 1; i >= 1; i--) {
        SwapElement(datalist, 0, i);
        heapsize = heapsize - 1;
        Heapsort_MaxHeapify(datalist, 0, heapsize);
    }
}
function Heapsort_LeftChild(i) {
    return 2 * i + 1;
}
function Heapsort_RightChild(i) {
    return 2 * i + 2;
}
function Heapsort_MaxHeapify(datalist, i, size, compareFn) {
    const leftchild = Heapsort_LeftChild(i);
    const rightchild = Heapsort_RightChild(i);
    let largest = 0;
    if (compareFn !== undefined) {
        if (leftchild <= size && compareFn(datalist[leftchild], datalist[i]) > 0) {
            largest = leftchild;
        }
        else {
            largest = i;
        }
        if (rightchild <= size && compareFn(datalist[rightchild], datalist[largest]) > 0) {
            largest = rightchild;
        }
    }
    else {
        if (leftchild <= size && datalist[leftchild] > datalist[i]) {
            largest = leftchild;
        }
        else {
            largest = i;
        }
        if (rightchild <= size && datalist[rightchild] > datalist[largest]) {
            largest = rightchild;
        }
    }
    if (largest !== i) {
        SwapElement(datalist, i, largest);
        Heapsort_MaxHeapify(datalist, largest, size, compareFn);
    }
}
function Heapsort_BuildMaxHeap(datalist, compareFn) {
    const heapsize = datalist.length;
    for (let i = Math.floor(heapsize / 2); i >= 0; i--) {
        Heapsort_MaxHeapify(datalist, i, heapsize, compareFn);
    }
}
//# sourceMappingURL=Algorithm.js.map