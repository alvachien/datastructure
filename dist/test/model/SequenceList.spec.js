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
import { SequenceList } from '../../lib/model/SequenceList';
describe('Test SequenceList', () => {
    let _seqList;
    beforeEach(() => {
        _seqList = new SequenceList();
    });
    it('#1. Check InitList()', () => {
        _seqList.InitList();
        expect(_seqList).toBeTruthy();
    });
    it('#2. Check empty list.', () => {
        _seqList.InitList();
        expect(_seqList.IsEmpty()).toBe(true);
        expect(_seqList.Length()).toBe(0);
    });
    it('#3. Check append of list.', () => {
        _seqList.InitList();
        _seqList.AppendElement(1);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(1);
        _seqList.AppendElement(2);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(2);
    });
    it('#4. Check insert of list.', () => {
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
    it('#5. Check delete of list.', () => {
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
    it('#6. Check empty.', () => {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        expect(_seqList.IsEmpty()).toBe(false);
        expect(_seqList.Length()).toBe(3);
        _seqList.ClearAll();
        expect(_seqList.Length()).toBe(0);
    });
    it('#7. Check IsExist.', () => {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(2);
        expect(_seqList.IsExist(1)).toBe(true);
        expect(_seqList.IsExist(2)).toBe(true);
        expect(_seqList.IsExist(3)).toBe(false);
    });
    it('#8. Check Print.', () => {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        expect(_seqList.Print(',')).toBe('1,2,3');
        expect(_seqList.Print('-')).toBe('1-2-3');
        expect(_seqList.Print()).toBe('1,2,3');
    });
    it('#9. Check Iterator.', () => {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        let i = 0;
        for (const elem of _seqList) {
            switch (i) {
                case 0:
                    expect(elem).toEqual(1);
                    break;
                case 1:
                    expect(elem).toEqual(2);
                    break;
                case 2:
                    expect(elem).toEqual(3);
                    break;
                default: break;
            }
            i++;
        }
    });
    it('#10. Check Iterator, II.', () => {
        _seqList.InitList();
        _seqList.AppendElement(1);
        _seqList.AppendElement(2);
        _seqList.AppendElement(3);
        let i = 0;
        for (const elem of _seqList) {
            switch (i) {
                case 0:
                    expect(elem).toEqual(1);
                    break;
                case 1:
                    expect(elem).toEqual(2);
                    break;
                case 2:
                    expect(elem).toEqual(3);
                    break;
                default: break;
            }
            i++;
        }
        // Re-iteration
        i = 0;
        for (const elem of _seqList) {
            switch (i) {
                case 0:
                    expect(elem).toEqual(1);
                    break;
                case 1:
                    expect(elem).toEqual(2);
                    break;
                case 2:
                    expect(elem).toEqual(3);
                    break;
                default: break;
            }
            i++;
        }
    });
});
//# sourceMappingURL=SequenceList.spec.js.map