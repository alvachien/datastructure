"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkList.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var LinkList_1 = require("../../lib/model/LinkList");
describe('Test LinkList', function () {
    var _linkList;
    beforeEach(function () {
        _linkList = new LinkList_1.LinkList();
    });
    it('#1. Check InitList()', function () {
        _linkList.InitList(2);
        expect(_linkList.Head).toBeTruthy();
    });
    it('#2. Check empty list.', function () {
        _linkList.InitList(1);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(1);
    });
    it('#3. Check append of list.', function () {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(2);
        _linkList.AppendElement(3);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(3);
    });
    it('#4. Check insert of list.', function () {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(2);
        _linkList.InsertElement(1, 3);
        expect(_linkList.Length()).toBe(3);
        expect(_linkList.GetElement(0)).toBe(1);
        expect(_linkList.GetElement(1)).toBe(3);
        expect(_linkList.GetElement(2)).toBe(2);
    });
    it('#5. Check delete of list.', function () {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(3);
        expect(_linkList.DeleteElement(1)).toBe(true);
        expect(_linkList.Length()).toBe(2);
        expect(_linkList.GetElement(0)).toBe(1);
        expect(_linkList.GetElement(1)).toBe(3);
        expect(_linkList.DeleteElement(0)).toBe(true);
        expect(_linkList.Length()).toBe(1);
        expect(_linkList.GetElement(0)).toBe(3);
        expect(_linkList.DeleteElement(0)).toBe(true);
        expect(_linkList.Length()).toBe(0);
        expect(_linkList.DeleteElement(0)).toBe(false);
    });
    it('#6. Check empty.', function () {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(3);
        _linkList.ClearAll();
        expect(_linkList.Length()).toBe(0);
    });
    it('#7. Check IsExist.', function () {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(2);
        expect(_linkList.IsExist(1)).toBe(true);
        expect(_linkList.IsExist(2)).toBe(true);
        expect(_linkList.IsExist(3)).toBe(false);
    });
    it('#8. Check Print.', function () {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        expect(_linkList.Print(',')).toBe('1,2,3');
        expect(_linkList.Print('-')).toBe('1-2-3');
        expect(_linkList.Print()).toBe('1,2,3');
    });
});
//# sourceMappingURL=LinkList.spec.js.map