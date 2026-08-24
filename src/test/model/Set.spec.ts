/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.spec.ts
 *
 */

import { Set } from '../../lib/model/Set';

describe('Test Set', () => {
  let _set: Set;

  beforeEach(() => {
    _set = new Set();
  });

  it('#1. Check add, values, has and size()', () => {
    expect(_set).toBeTruthy();

    _set.add(1);

    let vals = _set.values();
    expect(vals.length).toBe(1);
    expect(vals[0]).toBe(1);
    vals = _set.valuesLegacy();
    expect(vals.length).toBe(1);
    expect(vals[0]).toBe(1);
    expect(_set.has(1)).toBe(true);
    expect(_set.size()).toBe(1);

    _set.add(2);
    vals = _set.values();
    expect(vals.length).toBe(2);
    expect(vals).toContain(1);
    expect(vals).toContain(2);
  });

  it('#2. Check remove()', () => {
    _set.add(1);
    _set.add(2);
    let vals = _set.values();
    expect(vals.length).toBe(2);

    _set.remove(1);
    vals = _set.values();
    expect(vals.length).toBe(1);
    expect(vals[0]).toBe(2);
  });

  it('#3. Test union()', () => {
    _set.add(1);
    _set.add(2);
    _set.add(3);

    const set2 = new Set();
    set2.add(3);
    set2.add(4);
    set2.add(5);
    set2.add(6);

    const unset = _set.union(set2);
    const vals = unset.values();
    expect(vals.length).toBe(6);
    expect(unset.has(3)).toBe(true);
  });

  it('#4. Test intersection()', () => {
    _set.add(1);
    _set.add(2);
    _set.add(3);

    const set2 = new Set();
    set2.add(3);
    set2.add(4);
    set2.add(5);
    set2.add(6);

    const unset = _set.intersection(set2);
    const vals = unset.values();
    expect(vals.length).toBe(1);
    expect(unset.has(3)).toBe(true);
    expect(unset.has(2)).toBe(false);
  });

  it('#5. Test difference()', () => {
    _set.add(1);
    _set.add(2);
    _set.add(3);

    const set2 = new Set();
    set2.add(3);
    set2.add(4);
    set2.add(5);
    set2.add(6);

    const unset = _set.difference(set2);
    const vals = unset.values();
    expect(vals.length).toBe(2);
    expect(unset.has(3)).toBe(false);
    expect(unset.has(2)).toBe(true);
  });

  it('#6. Test subset()', () => {
    _set.add(1);
    _set.add(2);
    _set.add(3);

    const set2 = new Set();
    set2.add(1);
    set2.add(2);
    set2.add(3);
    set2.add(4);
    set2.add(5);
    set2.add(6);

    expect(_set.subset(set2)).toBe(true);

    _set.add(8);
    expect(_set.subset(set2)).toBe(false);
  });

  it('#6a. Test subset edge cases (size guard and equality).', () => {
    // Empty set is a subset of any set.
    expect(_set.subset(set2empty())).toBe(true);

    // A set is a subset of itself.
    _set.add(1);
    _set.add(2);
    expect(_set.subset(cloneOf(_set))).toBe(true);

    // Larger set cannot be subset of a smaller set (size guard).
    const small = new Set<number>();
    small.add(1);
    expect(_set.subset(small)).toBe(false);

    function set2empty() { return new Set<number>(); }
    function cloneOf(s: Set<number>) {
      const c = new Set<number>();
      for (const v of s.values()) { c.add(v); }
      return c;
    }
  });

  it('#7. Test object keys do not collide (Map-backed identity).', () => {
    const objSet = new Set<{ id: number }>();
    const o1 = { id: 1 };
    const o2 = { id: 2 };
    const o1Again = { id: 1 }; // equal by value, distinct by reference

    expect(objSet.add(o1)).toBe(true);
    expect(objSet.add(o2)).toBe(true);
    expect(objSet.size()).toBe(2);

    // Adding the same reference again is a no-op.
    expect(objSet.add(o1)).toBe(false);
    expect(objSet.size()).toBe(2);

    // A structurally-equal but distinct object is NOT considered a duplicate
    // (Set stores by identity, like the native Set).
    expect(objSet.add(o1Again)).toBe(true);
    expect(objSet.size()).toBe(3);

    // has() works by identity.
    expect(objSet.has(o1)).toBe(true);
    expect(objSet.has(o2)).toBe(true);

    // values() returns the original objects, not coerced string keys.
    const vals = objSet.values();
    expect(vals).toContain(o1);
    expect(vals).toContain(o2);
    expect(vals).toContain(o1Again);

    // remove() works by identity.
    expect(objSet.remove(o1)).toBe(true);
    expect(objSet.has(o1)).toBe(false);
    expect(objSet.size()).toBe(2);
  });

  it('#8. Test clear().', () => {
    _set.add(1);
    _set.add(2);
    expect(_set.size()).toBe(2);

    _set.clear();
    expect(_set.size()).toBe(0);
    expect(_set.values().length).toBe(0);
  });
});
