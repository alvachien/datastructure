"use strict";
/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
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
Object.defineProperty(exports, "__esModule", { value: true });
/* 1. Utility functions */
/**
 * SwapElement: Unitity method, used to swap two elements in an array
 * @param datalist : data array
 * @param i : index of the first element
 * @param j : index of the second element
 */
function SwapElement(datalist, i, j) {
    if (datalist.length <= 0
        || i === j
        || i >= datalist.length
        || j > datalist.length) {
        return;
    }
    var tmp = datalist[i];
    datalist[i] = datalist[j];
    datalist[j] = tmp;
}
exports.SwapElement = SwapElement;
/* 2. KMP */
function KMP_MakeNext(arr) {
    var q = 0;
    var k = 0;
    var len = 0;
    len = arr.length;
    var next = [];
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
function KMP(arr1, arr2) {
    var n = arr1.length;
    var m = arr2.length;
    var next = KMP_MakeNext(arr2);
    for (var i = 0, q = 0; i < n; ++i) {
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
exports.KMP = KMP;
/* 2. Sorting */
/**
 * Insertion sort: an in-place sorting
 * @param datalist: data list for sorting
 *
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
function InsertionSort(datalist) {
    if (datalist.length <= 0) {
        return false;
    }
    for (var i = 1; i < datalist.length; i++) {
        InsertionSort_Insert(datalist, i);
    }
    return true;
}
exports.InsertionSort = InsertionSort;
function InsertionSort_Insert(datalist, idx) {
    var tmp = datalist[idx];
    var j = idx;
    while (j > 0 && tmp < datalist[j - 1]) {
        datalist[j] = datalist[j - 1];
        j--;
    }
    datalist[j] = tmp;
}
/**
 * Binary insertion sort: an in-place sorting by using binary searching
 * @param datalist: data list for sorting
 *
 * Loop through the list:
 *  When inserting the i-th element, the previous list (0 .. i-1) has been sorted already.
 *  And, then insert i-th element into the (0 .. i-1), and shift the positions for impacted elements.
 */
function BinaryInsertSort(datalist) {
    if (datalist.length <= 0) {
        return false;
    }
    for (var i = 1; i < datalist.length; i++) {
        BinaryInsertSort_Insert(datalist, i);
    }
    return true;
}
exports.BinaryInsertSort = BinaryInsertSort;
function BinaryInsertSort_Insert(datalist, idx) {
    var tmp = datalist[idx];
    var left = 0;
    var right = idx - 1;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (tmp < datalist[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    for (var k = idx - 1; k >= left; k--) {
        datalist[k + 1] = datalist[k];
    }
    datalist[left] = tmp;
}
/**
 * Bubble sort: an in-place exchange sort
 * @param datalist: data list for sorting
 *
 * Two nested loops through the list:
 * First loop through 0 .. length - 1
 *  Second loop through available elements (length - 1 - i)
 *  Compare the two elements, exchange the larger one to higher position.
 */
function BubbleSort(datalist) {
    if (datalist.length <= 0) {
        return false;
    }
    for (var i = 0; i < datalist.length - 1; i++) {
        for (var j = 0; j < datalist.length - 1 - i; j++) {
            if (datalist[j] > datalist[j + 1]) {
                SwapElement(datalist, j, j + 1);
            }
        }
    }
    return true;
}
exports.BubbleSort = BubbleSort;
/**
 * Quick sort: an in-place exchange sort
 * @param datalist: data list for sorting
 *
 * The core method of quick sort is the recursive.
 * Choose one number, split the whole array to two arrays: one all smaller than that number, the other all larger than it.
 * Then recursively process the two new arrays with the same idea.
 */
function QuickSort(datalist) {
    QuickSortImpl(datalist, 0, datalist.length - 1);
    return true;
}
exports.QuickSort = QuickSort;
function QuickSortImpl(datalist, left, right) {
    if (left >= right) {
        return;
    }
    var i = left;
    var j = right;
    var key = datalist[left];
    while (i < j) {
        while (i < j && key <= datalist[j]) {
            j--;
        }
        datalist[i] = datalist[j];
        while (i < j && key >= datalist[i]) {
            i++;
        }
        datalist[j] = datalist[i];
    }
    datalist[i] = key;
    QuickSortImpl(datalist, left, i - 1);
    QuickSortImpl(datalist, i + 1, right);
}
/**
 * Selection sort: an in-place sorting
 * @param datalist data list for sorting
 *
 * The idea for selection sort is, choose the min (or max) from un-sorted part, and append it to the sorted part
 */
function SelectionSort(datalist) {
    var i = 0;
    for (i = 0; i < datalist.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < datalist.length; j++) {
            if (datalist[min] > datalist[j]) {
                min = j;
            }
        }
        if (min !== i) {
            SwapElement(datalist, min, i);
        }
    }
}
exports.SelectionSort = SelectionSort;
/**
 * Counting sort
 * @param datalist: data list for sorting
 * @param max: maximum
 *
 * The idea behind is, build an array for all possible values, the element of the list are map to that huge array with correct position.
 */
function CountingSort(datalist) {
    var tmp = [];
    var out = [];
    //Get min and max number in array
    var max = datalist[0];
    var min = max;
    for (var i = 1; i < datalist.length; i++) {
        if (datalist[i] > max) {
            max = datalist[i];
        }
        if (datalist[i] < min) {
            min = datalist[i];
        }
    }
    //Generate tmp[]
    for (var i = 0; i < max - min + 1; i++) {
        tmp.push(0);
    }
    for (var i = 0; i < datalist.length; i++) {
        tmp[datalist[i] - min] += 1;
        out.push(0);
    }
    for (var i = 1; i < max - min + 1; i++) {
        tmp[i] = tmp[i - 1] + tmp[i];
    }
    for (var i = datalist.length - 1; i >= 0; i--) {
        out[tmp[datalist[i] - min] - 1] = datalist[i];
        tmp[datalist[i] - min]--;
    }
    for (var i = 0; i < datalist.length; i++) {
        datalist[i] = out[i];
    }
}
exports.CountingSort = CountingSort;
/**
 * Merge sorting
 * @param datalist: data list for sorting
 */
function MergeSort(datalist) {
    MergeSortImpl(datalist, 0, datalist.length);
}
exports.MergeSort = MergeSort;
function MergeSortImpl(datalist, begin, end) {
    if (end - begin > 1) {
        var mid = Math.floor((begin + end) / 2);
        MergeSortImpl(datalist, begin, mid);
        MergeSortImpl(datalist, mid, end);
        MergeSortImpl2(datalist, begin, mid, end);
    }
}
function MergeSortImpl2(datalist, begin, mid, end) {
    var lsize = mid - begin;
    var rsize = end - mid;
    var arLeft = new Array();
    var arRight = new Array();
    var lnow = 0;
    var rnow = 0;
    for (var i = begin; i < mid; i++) {
        arLeft.push(datalist[i]);
    }
    for (var i = mid; i < end; i++) {
        arRight.push(datalist[i]);
    }
    var idx = 0;
    for (idx = 0; lnow < lsize && rnow < rsize; idx++) {
        if (arLeft[lnow] > arRight[rnow]) {
            datalist[begin + idx] = arLeft[lnow];
            lnow++;
        }
        else {
            datalist[begin + idx] = arRight[rnow];
            rnow++;
        }
    }
    if (lnow === lsize && rnow !== rsize) {
        for (var i = 0; i < (rsize - rnow); i++) {
            datalist[begin + idx + i] = arRight[rnow + i];
        }
    }
    else if (rnow === rsize && lnow !== lsize) {
        for (var i = 0; i < (lsize - lnow); i++) {
            datalist[begin + idx + i] = arLeft[lnow + i];
        }
    }
}
/**
 * Heap sort
 * @param datalist : data list
 *
 * The heap sort will struct the unsorted part as a maximum (or minimum) tree, and fetch the root node to the sort part.
 * Via this way, the array got sorted
 */
function HeapSort(datalist) {
    Heapsort_BuildMaxHeap(datalist);
    var heapsize = datalist.length - 1;
    for (var i = datalist.length - 1; i >= 1; i--) {
        SwapElement(datalist, 0, i);
        heapsize = heapsize - 1;
        Heapsort_MaxHeapify(datalist, 0, heapsize);
    }
}
exports.HeapSort = HeapSort;
function Heapsort_LeftChild(i) {
    return 2 * i + 1;
}
function Heapsort_RightChild(i) {
    return 2 * i + 2;
}
function Heapsort_MaxHeapify(datalist, i, size) {
    var leftchild = Heapsort_LeftChild(i);
    var rightchild = Heapsort_RightChild(i);
    var largest = 0;
    if (leftchild <= size && datalist[leftchild] > datalist[i]) {
        largest = leftchild;
    }
    else {
        largest = i;
    }
    if (rightchild <= size && datalist[rightchild] > datalist[largest]) {
        largest = rightchild;
    }
    if (largest !== i) {
        SwapElement(datalist, i, largest);
        Heapsort_MaxHeapify(datalist, largest, size);
    }
}
function Heapsort_BuildMaxHeap(datalist) {
    var heapsize = datalist.length;
    for (var i = Math.floor(heapsize / 2); i >= 0; i--) {
        Heapsort_MaxHeapify(datalist, i, heapsize);
    }
}
//# sourceMappingURL=Algorithm.js.map