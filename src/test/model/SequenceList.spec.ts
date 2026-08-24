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
  let _seqList: SequenceList<number>;

  beforeEach(() => {
    _seqList = new SequenceList<number>();
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

  it('#4a. Check insert at the tail (index === length).', () => {
    // Previously InsertElement rejected index === length, so appending via
    // InsertElement was impossible.
    _seqList.InitList();
    _seqList.AppendElement(1);
    _seqList.AppendElement(2);
    expect(_seqList.InsertElement(2, 3)).toBe(true);
    expect(_seqList.Length()).toBe(3);
    expect(_seqList.GetElement(0)).toBe(1);
    expect(_seqList.GetElement(1)).toBe(2);
    expect(_seqList.GetElement(2)).toBe(3);
  });

  it('#4b. Check insert at head (index === 0) and out-of-range.', () => {
    _seqList.InitList();
    _seqList.AppendElement(2);
    _seqList.AppendElement(3);

    expect(_seqList.InsertElement(0, 1)).toBe(true);
    expect(_seqList.Length()).toBe(3);
    expect(_seqList.GetElement(0)).toBe(1);

    // Negative and beyond-length indices must fail.
    expect(_seqList.InsertElement(-1, 9)).toBe(false);
    expect(_seqList.InsertElement(99, 9)).toBe(false);
    expect(_seqList.Length()).toBe(3);
  });

  it('#4c. InsertElement accepts null/undefined elements for a nullable T.', () => {
    // Regression for issue 2.3: the guard used to reject null/undefined
    // unconditionally, so a SequenceList<number | null> could not store them.
    const nlist = new SequenceList<number | null>();
    nlist.InitList();
    expect(nlist.InsertElement(0, null)).toBe(true);
    expect(nlist.AppendElement(undefined as unknown as null)).toBe(2);
    expect(nlist.Length()).toBe(2);
    expect(nlist.GetElement(0)).toBeNull();
    expect(nlist.GetElement(1)).toBeUndefined();
    // A real value still interleaves fine.
    expect(nlist.InsertElement(1, 42)).toBe(true);
    expect(nlist.GetElement(1)).toBe(42);
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

  it('#5a. Check delete leaves no trailing hole / undefined slot.', () => {
    // Previously DeleteElement used `delete` + `length--`, which could leave
    // a trailing undefined slot. After deletion the array must be compact.
    _seqList.InitList();
    _seqList.AppendElement(1);
    _seqList.AppendElement(2);
    _seqList.AppendElement(3);
    _seqList.AppendElement(4);

    expect(_seqList.DeleteElement(1)).toBe(true); // remove '2'
    expect(_seqList.Length()).toBe(3);
    // Walk every index; none may be undefined.
    expect(_seqList.GetElement(0)).toBe(1);
    expect(_seqList.GetElement(1)).toBe(3);
    expect(_seqList.GetElement(2)).toBe(4);
    // Out-of-range lookup still returns null (not a leftover undefined).
    expect(_seqList.GetElement(3)).toBeNull();

    // Delete the last element and ensure no hole is left behind.
    expect(_seqList.DeleteElement(2)).toBe(true); // remove '4' (tail)
    expect(_seqList.Length()).toBe(2);
    expect(_seqList.GetElement(0)).toBe(1);
    expect(_seqList.GetElement(1)).toBe(3);
    expect(_seqList.GetElement(2)).toBeNull();
  });

  it('#5b. Check delete out-of-range fails.', () => {
    _seqList.InitList();
    _seqList.AppendElement(1);
    expect(_seqList.DeleteElement(-1)).toBe(false);
    expect(_seqList.DeleteElement(99)).toBe(false);
    expect(_seqList.Length()).toBe(1);

    // Deleting from an empty list is a no-op failure.
    _seqList.ClearAll();
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
    for(const elem of _seqList) {
      switch(i) {
        case 0: expect(elem).toEqual(1); break;
        case 1: expect(elem).toEqual(2); break;
        case 2: expect(elem).toEqual(3); break;
        default: break;
      }

      i ++;
    }
  });

  it('#10. Check Iterator, II.', () => {
    _seqList.InitList();
    _seqList.AppendElement(1);
    _seqList.AppendElement(2);
    _seqList.AppendElement(3);

    let i = 0;
    for(const elem of _seqList) {
      switch(i) {
        case 0: expect(elem).toEqual(1); break;
        case 1: expect(elem).toEqual(2); break;
        case 2: expect(elem).toEqual(3); break;
        default: break;
      }

      i ++;
    }

    // Re-iteration
    i = 0;
    for(const elem of _seqList) {
      switch(i) {
        case 0: expect(elem).toEqual(1); break;
        case 1: expect(elem).toEqual(2); break;
        case 2: expect(elem).toEqual(3); break;
        default: break;
      }

      i ++;
    }
  });
});
