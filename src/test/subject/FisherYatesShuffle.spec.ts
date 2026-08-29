/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FisherYatesShuffle.spec.ts
 *
 */

import { FisherYatesShuffle } from '../../lib/subject';

describe('Unit test for FisherYatesShuffle in Model', () => {
  it('#1. Returns a new array and leaves the source untouched', () => {
    const source = [1, 2, 3, 4, 5];
    const shuffled = FisherYatesShuffle(source);
    expect(shuffled).not.toBe(source);
    expect(source).toEqual([1, 2, 3, 4, 5]);
  });

  it('#2. Preserves all elements (same length and multiset)', () => {
    const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let round = 0; round < 50; round++) {
      const shuffled = FisherYatesShuffle(source);
      expect(shuffled.length).toEqual(source.length);
      expect(shuffled.slice().sort()).toEqual(source.slice().sort());
    }
  });

  it('#3. Empty and single-element lists pass through', () => {
    expect(FisherYatesShuffle([])).toEqual([]);
    expect(FisherYatesShuffle([42])).toEqual([42]);
  });

  it('#4. Actually reorders (over many runs the identity order is rare)', () => {
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let changed = 0;
    for (let round = 0; round < 100; round++) {
      if (JSON.stringify(FisherYatesShuffle(source)) !== JSON.stringify(source)) {
        changed++;
      }
    }
    // Probability all 100 runs return the identity permutation is ~ (1/10!)^100
    expect(changed).toBeGreaterThan(90);
  });

  it('#5. Works on object lists (reference equality kept)', () => {
    const a = { name: 'A' };
    const b = { name: 'B' };
    const c = { name: 'C' };
    const shuffled = FisherYatesShuffle([a, b, c]);
    expect(shuffled.length).toEqual(3);
    expect(shuffled.indexOf(a)).toBeGreaterThanOrEqual(0);
    expect(shuffled.indexOf(b)).toBeGreaterThanOrEqual(0);
    expect(shuffled.indexOf(c)).toBeGreaterThanOrEqual(0);
  });
});
