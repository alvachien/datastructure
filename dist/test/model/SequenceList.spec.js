"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceList.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceList_1 = require("../../lib/model/SequenceList");
describe('Test SequenceList', function () {
    var _seqList;
    beforeEach(function () {
        _seqList = new SequenceList_1.SequenceList();
    });
    it('#1. Check InitList()', function () {
        _seqList.InitList();
        expect(_seqList).toBeTruthy();
    });
    it('#2. Check empty list.', function () {
        _seqList.InitList();
        expect(_seqList.IsEmpty()).toBe(true);
        expect(_seqList.Length()).toBe(0);
    });
    it('#3. Check append of list.', function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(1);
        _seqList.AppendElement(2);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(2);
    });
    it('#4. Check insert of list.', function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(2);
        _seqList.InsertElement(1, 3);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(3);
        expect(_seqList.GetElement(0)).toBe(1);
        expect(_seqList.GetElement(1)).toBe(3);
        expect(_seqList.GetElement(2)).toBe(2);
    });
    it('#5. Check delete of list.', function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(3);
        expect(_seqList.DeleteElement(1)).toBe(true);
        expect(_seqList.Length()).toBe(2);
        expect(_seqList.GetElement(0)).toBe(1);
        expect(_seqList.GetElement(1)).toBe(3);
        expect(_seqList.DeleteElement(0)).toBe(true);
        expect(_seqList.Length()).toBe(1);
        expect(_seqList.GetElement(0)).toBe(3);
        expect(_seqList.DeleteElement(0)).toBe(true);
        expect(_seqList.Length()).toBe(0);
        expect(_seqList.DeleteElement(0)).toBe(false);
    });
    it('#6. Check empty.', function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(3);
        _seqList.ClearAll();
        expect(_seqList.Length()).toBe(0);
    });
    it('#7. Check IsExist.', function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(2);
        expect(_seqList.IsExist(1)).toBe(true);
        expect(_seqList.IsExist(2)).toBe(true);
        expect(_seqList.IsExist(3)).toBe(false);
    });
    it('#8. Check Print.', function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        expect(_seqList.Print(',')).toBe('1,2,3');
        expect(_seqList.Print('-')).toBe('1-2-3');
        expect(_seqList.Print()).toBe('1,2,3');
    });
});
//# sourceMappingURL=SequenceList.spec.js.map