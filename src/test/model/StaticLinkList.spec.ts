/**
 * @license
 * (C) Alva Chien, 2017 - 2025. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.spec.ts
 *
 */

import { StaticLinkList } from '../../lib/model/StaticLinkList';

describe('Test StaticLinkList', () => {
  let _list: StaticLinkList<number>;

  beforeEach(() => {
    _list = new StaticLinkList<number>();
  });

  it('#1. Test creation and empty state.', () => {
    expect(_list).toBeTruthy();
    expect(_list.IsEmpty()).toBe(true);
    expect(_list.Length()).toBe(0);
    expect(_list.GetElement(0)).toBeNull();
    expect(_list.Print()).toBe('');
  });

  it('#2. Test AppendElement and GetElement.', () => {
    expect(_list.AppendElement(10)).toBe(1);
    expect(_list.AppendElement(20)).toBe(2);
    expect(_list.AppendElement(30)).toBe(3);

    expect(_list.Length()).toBe(3);
    expect(_list.GetElement(0)).toBe(10);
    expect(_list.GetElement(1)).toBe(20);
    expect(_list.GetElement(2)).toBe(30);
    expect(_list.GetElement(3)).toBeNull(); // out of range
  });

  it('#3. Test InsertElement at head, middle, and tail.', () => {
    _list.AppendElement(2);
    _list.AppendElement(4);

    expect(_list.InsertElement(0, 1)).toBe(true); // head
    expect(_list.InsertElement(2, 3)).toBe(true); // middle
    expect(_list.InsertElement(4, 5)).toBe(true); // tail (index === length)

    expect(_list.Length()).toBe(5);
    expect(_list.Print(',')).toBe('1,2,3,4,5');
  });

  it('#4. Test InsertElement out of range.', () => {
    expect(_list.InsertElement(-1, 9)).toBe(false);
    expect(_list.InsertElement(1, 9)).toBe(false); // length is 0
    _list.AppendElement(1);
    expect(_list.InsertElement(1, 9)).toBe(true);   // index === length ok (append)
    expect(_list.InsertElement(3, 9)).toBe(false);  // beyond length
    expect(_list.InsertElement(99, 9)).toBe(false);
  });

  it('#5. Test DeleteElement.', () => {
    _list.AppendElement(1);
    _list.AppendElement(2);
    _list.AppendElement(3);
    _list.AppendElement(4);

    expect(_list.DeleteElement(1)).toBe(true); // remove '2'
    expect(_list.Length()).toBe(3);
    expect(_list.Print(',')).toBe('1,3,4');

    expect(_list.DeleteElement(0)).toBe(true); // remove head '1'
    expect(_list.Length()).toBe(2);
    expect(_list.Print(',')).toBe('3,4');

    expect(_list.DeleteElement(1)).toBe(true); // remove tail '4'
    expect(_list.Length()).toBe(1);
    expect(_list.Print(',')).toBe('3');

    expect(_list.DeleteElement(0)).toBe(true); // remove last
    expect(_list.IsEmpty()).toBe(true);
  });

  it('#6. Test DeleteElement out of range.', () => {
    expect(_list.DeleteElement(-1)).toBe(false);
    expect(_list.DeleteElement(0)).toBe(false); // empty
    _list.AppendElement(1);
    expect(_list.DeleteElement(1)).toBe(false);
  });

  it('#7. Test ClearAll.', () => {
    _list.AppendElement(1);
    _list.AppendElement(2);
    expect(_list.ClearAll()).toBe(true);
    expect(_list.IsEmpty()).toBe(true);
    expect(_list.Length()).toBe(0);
    expect(_list.Print()).toBe('');
    // Reusable after clear.
    _list.AppendElement(9);
    expect(_list.Length()).toBe(1);
    expect(_list.GetElement(0)).toBe(9);
  });

  it('#8. Test iterator.', () => {
    _list.AppendElement(1);
    _list.AppendElement(2);
    _list.AppendElement(3);

    const seen: number[] = [];
    for (const v of _list) {
      seen.push(v);
    }
    expect(seen).toEqual([1, 2, 3]);
  });

  it('#9. Test re-iteration and iteration over empty list.', () => {
    // Empty list: iterator yields nothing and does not throw.
    const emptySeen: number[] = [];
    for (const v of _list) {
      emptySeen.push(v);
    }
    expect(emptySeen).toEqual([]);

    _list.AppendElement(10);
    _list.AppendElement(20);

    const a: number[] = [];
    for (const v of _list) { a.push(v); }
    const b: number[] = [];
    for (const v of _list) { b.push(v); }
    expect(a).toEqual([10, 20]);
    expect(b).toEqual([10, 20]);
  });

  it('#10. Test Print with custom splitter.', () => {
    _list.AppendElement(1);
    _list.AppendElement(2);
    _list.AppendElement(3);
    expect(_list.Print('-')).toBe('1-2-3');
    expect(_list.Print()).toBe('1,2,3');
  });

  it('#11. Test pool exhaustion (fixed capacity).', () => {
    const small = new StaticLinkList<number>(5); // 2 headers + 3 element slots
    expect(small.AppendElement(1)).toBe(1);
    expect(small.AppendElement(2)).toBe(2);
    expect(small.AppendElement(3)).toBe(3);
    // Pool exhausted: fourth append fails.
    expect(small.AppendElement(4)).toBe(-1);
    expect(small.Length()).toBe(3);
    // Free a slot and append succeeds again.
    expect(small.DeleteElement(0)).toBe(true);
    expect(small.AppendElement(4)).toBe(3);
    expect(small.Print(',')).toBe('2,3,4');
  });
});
