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
import { LinkList } from '../../lib/model/LinkList';
describe('Test LinkList', () => {
    let _linkList;
    beforeEach(() => {
        _linkList = new LinkList();
    });
    it('#1. Check InitList()', () => {
        _linkList.InitList(2);
        expect(_linkList.Head).toBeTruthy();
    });
    it('#2. Check empty list.', () => {
        _linkList.InitList(1);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(1);
    });
    it('#3. Check append of list.', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(2);
        _linkList.AppendElement(3);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(3);
    });
    it('#4. Check insert of list.', () => {
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
    it('#5. Check delete of list.', () => {
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
    it('#5a. DeleteElement rejects index === length (one past the end).', () => {
        // Regression: the guard used `> length`, so deleting at index === length
        // was permitted and then `cur.Next!.Next` dereferenced null on the trailing
        // node. It must now be rejected without throwing.
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        expect(_linkList.Length()).toBe(3);
        // index === length is one past the last valid index (length-1).
        expect(() => _linkList.DeleteElement(3)).not.toThrow();
        expect(_linkList.DeleteElement(3)).toBe(false);
        // List unchanged.
        expect(_linkList.Length()).toBe(3);
        expect(_linkList.GetElement(0)).toBe(1);
        expect(_linkList.GetElement(2)).toBe(3);
    });
    it('#5b. DeleteElement deletes the tail node safely.', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        // Delete the tail (index === length-1). Previously this was the case that
        // walked off the end; the trailing node's Next is null.
        expect(_linkList.DeleteElement(2)).toBe(true);
        expect(_linkList.Length()).toBe(2);
        expect(_linkList.GetElement(0)).toBe(1);
        expect(_linkList.GetElement(1)).toBe(2);
        // Re-iterating / printing must not follow a stale null Next.
        expect(_linkList.Print(',')).toBe('1,2');
    });
    it('#5c. DeleteElement rejects negative and out-of-range indices.', () => {
        _linkList.InitList(1);
        expect(_linkList.DeleteElement(-1)).toBe(false);
        expect(_linkList.DeleteElement(1)).toBe(false); // length is 1, so 1 is past end
        expect(_linkList.Length()).toBe(1);
    });
    it('#5d. DeleteElement on empty list returns false (no throw).', () => {
        expect(() => _linkList.DeleteElement(0)).not.toThrow();
        expect(_linkList.DeleteElement(0)).toBe(false);
    });
    it('#6. Check empty.', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        expect(_linkList.IsEmpty()).toBe(false);
        expect(_linkList.Length()).toBe(3);
        _linkList.ClearAll();
        expect(_linkList.Length()).toBe(0);
    });
    it('#7. Check IsExist.', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(2);
        expect(_linkList.IsExist(1)).toBe(true);
        expect(_linkList.IsExist(2)).toBe(true);
        expect(_linkList.IsExist(3)).toBe(false);
    });
    it('#7a. Check IsExist on an empty list (must not throw).', () => {
        // A freshly-constructed LinkList has a null head; IsExist used to
        // dereference the null head and throw. It must now safely return false.
        expect(() => _linkList.IsExist(1)).not.toThrow();
        expect(_linkList.IsExist(1)).toBe(false);
        expect(_linkList.IsExist(0)).toBe(false);
    });
    it('#7b. Check IsExist on a cleared list (must not throw).', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.ClearAll();
        expect(() => _linkList.IsExist(1)).not.toThrow();
        expect(_linkList.IsExist(1)).toBe(false);
    });
    it('#7c. Check IsExist finds head and tail.', () => {
        _linkList.InitList(10);
        _linkList.AppendElement(20);
        _linkList.AppendElement(30);
        expect(_linkList.IsExist(10)).toBe(true); // head
        expect(_linkList.IsExist(30)).toBe(true); // tail
        expect(_linkList.IsExist(20)).toBe(true); // middle
        expect(_linkList.IsExist(40)).toBe(false);
    });
    it('#8. Check Print.', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        expect(_linkList.Print(',')).toBe('1,2,3');
        expect(_linkList.Print('-')).toBe('1-2-3');
        expect(_linkList.Print()).toBe('1,2,3');
    });
    it('#9. Check Iterator.', () => {
        _linkList.InitList(1);
        _linkList.AppendElement(2);
        _linkList.AppendElement(3);
        let i = 0;
        for (const elem of _linkList) {
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
        i = 0;
        for (const elem of _linkList) {
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
//# sourceMappingURL=LinkList.spec.js.map