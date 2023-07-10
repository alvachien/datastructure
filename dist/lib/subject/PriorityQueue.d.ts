/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: PriorityQueue.ts
 *
 */
/**
 * Priority Queue
 */
export declare class PriorityQueueItem<T> {
    data: T;
    priority: number;
    constructor(data: T, priority: number);
}
export declare class PriorityQueue<T> {
    private _data;
    constructor();
    /**
     * The length of the whole stack
     */
    Length(): number;
    /**
     * Is empty? true means it is empty
     */
    IsEmpty(): boolean;
    /**
     * Enqueue the  element at the tailor of the queue, returns the result: true means success
     * @param elem the element to be inserted.
     */
    Enqueue(elem: T, pri: number): boolean;
    /**
     * Peek the top element without remove it, returns the top element.
     */
    Peek(): T;
    /**
     * Return the first element and remove it from the queue, returns the poped element.
     */
    Dequeue(): T;
    /**
     * Clear all elements, returns the result: true means suces
     */
    ClearAll(): boolean;
}
