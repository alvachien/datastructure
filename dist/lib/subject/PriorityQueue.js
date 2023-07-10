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
export class PriorityQueueItem {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}
export class PriorityQueue {
    constructor() {
        this._data = [];
    }
    /**
     * The length of the whole stack
     */
    Length() {
        return this._data.length;
    }
    /**
     * Is empty? true means it is empty
     */
    IsEmpty() {
        return this._data.length === 0;
    }
    /**
     * Enqueue the  element at the tailor of the queue, returns the result: true means success
     * @param elem the element to be inserted.
     */
    Enqueue(elem, pri) {
        let item = new PriorityQueueItem(elem, pri);
        if (this._data.length === 0) {
            this._data.push(item);
        }
        else {
            let added = false;
            for (let i = 0; i < this._data.length; i++) {
                if (item.priority < this._data[i].priority) {
                    this._data.splice(i, 0, item);
                    added = true;
                    break;
                }
            }
            if (added !== true) {
                this._data.push(item);
            }
        }
        return true;
    }
    /**
     * Peek the top element without remove it, returns the top element.
     */
    Peek() {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data[0].data;
    }
    /**
     * Return the first element and remove it from the queue, returns the poped element.
     */
    Dequeue() {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data.shift().data;
    }
    /**
     * Clear all elements, returns the result: true means suces
     */
    ClearAll() {
        this._data = [];
        return true;
    }
}
//# sourceMappingURL=PriorityQueue.js.map