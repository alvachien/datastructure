"use strict";
/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Node in static link list
 */
var StaticLinkListNode = /** @class */ (function () {
    function StaticLinkListNode() {
        this._cursor = -1;
    }
    StaticLinkListNode.prototype.constructore = function () {
        this._cursor = -1;
    };
    Object.defineProperty(StaticLinkListNode.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticLinkListNode.prototype, "Cursor", {
        get: function () {
            return this._cursor;
        },
        set: function (cur) {
            this._cursor = cur;
        },
        enumerable: true,
        configurable: true
    });
    return StaticLinkListNode;
}());
exports.StaticLinkListNode = StaticLinkListNode;
var StaticLinkList = /** @class */ (function () {
    /**
     * Constructor
     */
    function StaticLinkList() {
        this._data = new Array(200);
    }
    StaticLinkList.prototype.Length = function () {
        var j = 0;
        for (var _i = 0, _a = this._data; _i < _a.length; _i++) {
            var it_1 = _a[_i];
            if (it_1.Cursor !== -1) {
                j++;
            }
        }
        return j;
    };
    StaticLinkList.prototype.IsEmpty = function () {
        return this.Length() === 0;
    };
    StaticLinkList.prototype.ClearAll = function () {
        for (var _i = 0, _a = this._data; _i < _a.length; _i++) {
            var it_2 = _a[_i];
            it_2.Cursor = -1;
            it_2.Data = null;
        }
        return true;
    };
    StaticLinkList.prototype.GetElement = function (index) {
        if (this._data.length === 0) {
            return null;
        }
        // if (index >= 0 && index < this._data.length) {
        //     return this._data[index];
        // }
        return null;
    };
    StaticLinkList.prototype.InsertElement = function (index, elem) {
        // if (index < 0 || index >= this._data.length) {
        //     return false;
        // }
        // if (index < this._data.length) {
        //     for(let i = this._data.length - 1; i >= index; i --) {
        //         this._data[i + 1] = this._data[i];
        //     }
        //     this._data[index] = elem;
        // }
        return true;
    };
    StaticLinkList.prototype.AppendElement = function (elem) {
        // return this._data.push(elem);
        return -1;
    };
    StaticLinkList.prototype.DeleteElement = function (index) {
        // if (index < 0 || index >= this._data.length) {
        //     return false;
        // }
        // if (index < this._data.length - 1) {
        //     for(let k = index; k < this._data.length; k++) {
        //         this._data[k-1] = this._data[k];
        //     }
        // }
        // delete this._data[this._data.length - 1];
        // return true;
        return false;
    };
    StaticLinkList.prototype.Print = function () {
        // TBD
        return '';
    };
    return StaticLinkList;
}());
exports.StaticLinkList = StaticLinkList;
//# sourceMappingURL=StaticLinkList.js.map