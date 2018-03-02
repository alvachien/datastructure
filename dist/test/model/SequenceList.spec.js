"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceList_1 = require("../../lib/model/SequenceList");
describe('Test SequenceList', function () {
    var _seqList;
    beforeEach(function () {
        _seqList = new SequenceList_1.SequenceList();
    });
    it("#1. Check InitList()", function () {
        _seqList.InitList();
        expect(_seqList).toBeTruthy();
    });
    it("#2. Check empty list.", function () {
        _seqList.InitList();
        expect(_seqList.IsEmpty()).toBe(true);
        expect(_seqList.Length()).toBe(0);
    });
    it("#3. Check append of list.", function () {
        _seqList.InitList();
        _seqList.AppendElement(1);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(1);
        _seqList.AppendElement(2);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(2);
    });
    it("#4. Check insert of list.", function () {
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
});
//# sourceMappingURL=SequenceList.spec.js.map