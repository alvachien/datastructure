"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Priority Queue
 */
var PriorityQueueItem = /** @class */ (function () {
    function PriorityQueueItem(data, priority) {
        this.data = data;
        this.priority = priority;
    }
    return PriorityQueueItem;
}());
exports.PriorityQueueItem = PriorityQueueItem;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this._data = [];
    }
    /**
     * The length of the whole stack
     */
    PriorityQueue.prototype.Length = function () {
        return this._data.length;
    };
    /**
     * Is empty? true means it is empty
     */
    PriorityQueue.prototype.IsEmpty = function () {
        return this._data.length === 0;
    };
    /**
     * Enqueue the  element at the tailor of the queue, returns the result: true means success
     * @param elem the element to be inserted.
     */
    PriorityQueue.prototype.Enqueue = function (elem, pri) {
        var item = new PriorityQueueItem(elem, pri);
        if (this._data.length === 0) {
            this._data.push(item);
        }
        else {
            var added = false;
            for (var i = 0; i < this._data.length; i++) {
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
    };
    /**
     * Peek the top element without remove it, returns the top element.
     */
    PriorityQueue.prototype.Peek = function () {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data[0].data;
    };
    /**
     * Return the first element and remove it from the queue, returns the poped element.
     */
    PriorityQueue.prototype.Dequeue = function () {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data.shift().data;
    };
    /**
     * Clear all elements, returns the result: true means suces
     */
    PriorityQueue.prototype.ClearAll = function () {
        this._data = [];
        return true;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map