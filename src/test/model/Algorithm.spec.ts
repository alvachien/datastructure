/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Algorithm.spec.ts
 * Algorithm
 *
 */

import { InsertionSort, QuickSort, BubbleSort, BinaryInsertSort, SelectionSort, CountingSort, MergeSort, HeapSort, KMP } from '../../lib/model/Algorithm';

describe('Test Algorithm', () => {
  class TestObject {
    seq = 0;
    name = '';
  }
  let orgNumArray: number[] = [];
  let orgStringArray: string[] = [];
  let orgObjectArray: TestObject[] = [];

  beforeEach(() => {
    // Do nothing
    orgNumArray = [71, 57, 29, 19, 33, 14];
    orgStringArray = [ 'apple', 'sap', 'microsoft', 'adobe'];
    orgObjectArray = [ {
      seq: 25,
      name: 'No.25'
    }, {
      seq: 19,
      name: 'No.19'
    }, {
      seq: 44,
      name: 'No.44'
    }, {
      seq: 7,
      name: 'No.7'
    }];
  });

  it('#1. InsertionSort: number', () => {
    const rst = InsertionSort(orgNumArray);
    expect(rst).toBe(true);
    expect(orgNumArray[0]).toBe(14);
    expect(orgNumArray[1]).toBe(19);
    expect(orgNumArray[2]).toBe(29);
    expect(orgNumArray[3]).toBe(33);
    expect(orgNumArray[4]).toBe(57);
    expect(orgNumArray[5]).toBe(71);
  });

  it('#2. InsertionSort: string', () => {
    const rst = InsertionSort(orgStringArray);
    expect(rst).toBe(true);
    expect(orgStringArray[0]).toBe('adobe');
    expect(orgStringArray[1]).toBe('apple');
    expect(orgStringArray[2]).toBe('microsoft');
    expect(orgStringArray[3]).toBe('sap');
  });

  it('#3. InsertionSort: object', () => {
    const rst = InsertionSort(orgObjectArray, (a, b) => {
      return a.seq - b.seq;
    });
    expect(rst).toBe(true);
    expect(orgObjectArray[0].seq).toBe(7);
    expect(orgObjectArray[1].name).toBe('No.19');
    expect(orgObjectArray[2].seq).toBe(25);
    expect(orgObjectArray[3].name).toBe('No.44');
  });

  it('#4. QuickSort: number', () => {
    const rst = QuickSort(orgNumArray);
    expect(rst).toBe(true);
    expect(orgNumArray[0]).toBe(14);
    expect(orgNumArray[1]).toBe(19);
    expect(orgNumArray[2]).toBe(29);
    expect(orgNumArray[3]).toBe(33);
    expect(orgNumArray[4]).toBe(57);
    expect(orgNumArray[5]).toBe(71);
  });

  it('#5. QuickSort: string', () => {
    const rst = QuickSort(orgStringArray);
    expect(rst).toBe(true);
    expect(orgStringArray[0]).toBe('adobe');
    expect(orgStringArray[1]).toBe('apple');
    expect(orgStringArray[2]).toBe('microsoft');
    expect(orgStringArray[3]).toBe('sap');
  });

  it('#6. QuickSort: object', () => {
    const rst = QuickSort(orgObjectArray, (a, b) => {
      return a.seq - b.seq;
    });
    expect(rst).toBe(true);
    expect(orgObjectArray[0].seq).toBe(7);
    expect(orgObjectArray[1].name).toBe('No.19');
    expect(orgObjectArray[2].seq).toBe(25);
    expect(orgObjectArray[3].name).toBe('No.44');
  });

  it('#7. BubbleSort: number', () => {
    const rst = BubbleSort(orgNumArray);
    expect(rst).toBe(true);
    expect(orgNumArray[0]).toBe(14);
    expect(orgNumArray[1]).toBe(19);
    expect(orgNumArray[2]).toBe(29);
    expect(orgNumArray[3]).toBe(33);
    expect(orgNumArray[4]).toBe(57);
    expect(orgNumArray[5]).toBe(71);
  });

  it('#8. BubbleSort: string', () => {
    const rst = BubbleSort(orgStringArray);
    expect(rst).toBe(true);
    expect(orgStringArray[0]).toBe('adobe');
    expect(orgStringArray[1]).toBe('apple');
    expect(orgStringArray[2]).toBe('microsoft');
    expect(orgStringArray[3]).toBe('sap');
  });

  it('#9. BubbleSort: object', () => {
    const rst = BubbleSort(orgObjectArray, (a, b) => {
      return a.seq - b.seq;
    });
    expect(rst).toBe(true);
    expect(orgObjectArray[0].seq).toBe(7);
    expect(orgObjectArray[1].name).toBe('No.19');
    expect(orgObjectArray[2].seq).toBe(25);
    expect(orgObjectArray[3].name).toBe('No.44');
  });

  // The expected ascending result for the default number/string/object arrays.
  const sortedNumbers = (): number[] => [14, 19, 29, 33, 57, 71];
  const sortedStrings = (): string[] => ['adobe', 'apple', 'microsoft', 'sap'];
  const sortedObjects = (): TestObject[] => [
    { seq: 7, name: 'No.7' },
    { seq: 19, name: 'No.19' },
    { seq: 25, name: 'No.25' },
    { seq: 44, name: 'No.44' },
  ];

  it('#10. BinaryInsertSort: number', () => {
    const rst = BinaryInsertSort(orgNumArray);
    expect(rst).toBe(true);
    expect(orgNumArray).toEqual(sortedNumbers());
  });

  it('#11. BinaryInsertSort: string', () => {
    const rst = BinaryInsertSort(orgStringArray);
    expect(rst).toBe(true);
    expect(orgStringArray).toEqual(sortedStrings());
  });

  it('#12. BinaryInsertSort: object', () => {
    const rst = BinaryInsertSort(orgObjectArray, (a, b) => a.seq - b.seq);
    expect(rst).toBe(true);
    expect(orgObjectArray).toEqual(sortedObjects());
  });

  it('#13. BinaryInsertSort: empty returns false', () => {
    const empty: number[] = [];
    expect(BinaryInsertSort(empty)).toBe(false);
    expect(empty).toEqual([]);
  });

  it('#14. SelectionSort: number', () => {
    const rst = SelectionSort(orgNumArray);
    expect(rst).toBe(true); // previously returned false even on success
    expect(orgNumArray).toEqual(sortedNumbers());
  });

  it('#15. SelectionSort: string', () => {
    const rst = SelectionSort(orgStringArray);
    expect(rst).toBe(true);
    expect(orgStringArray).toEqual(sortedStrings());
  });

  it('#16. SelectionSort: object', () => {
    const rst = SelectionSort(orgObjectArray, (a, b) => a.seq - b.seq);
    expect(rst).toBe(true);
    expect(orgObjectArray).toEqual(sortedObjects());
  });

  it('#17. SelectionSort: empty returns false', () => {
    const empty: number[] = [];
    expect(SelectionSort(empty)).toBe(false);
    expect(empty).toEqual([]);
  });

  it('#18. CountingSort: number', () => {
    const arr = [71, 57, 29, 19, 33, 14];
    CountingSort(arr);
    expect(arr).toEqual(sortedNumbers());
  });

  it('#19. CountingSort: negative numbers', () => {
    const arr = [-3, -1, -2, 5, 0, -3];
    CountingSort(arr);
    expect(arr).toEqual([-3, -3, -2, -1, 0, 5]);
  });

  it('#20. CountingSort: empty array does not throw', () => {
    const empty: number[] = [];
    expect(() => CountingSort(empty)).not.toThrow();
    expect(empty).toEqual([]);
  });

  it('#21. CountingSort: single element', () => {
    const arr = [42];
    CountingSort(arr);
    expect(arr).toEqual([42]);
  });

  it('#22. MergeSort: number (ascending)', () => {
    const rst = MergeSort(orgNumArray);
    expect(rst).toBeUndefined();
    expect(orgNumArray).toEqual(sortedNumbers());
  });

  it('#23. MergeSort: string', () => {
    MergeSort(orgStringArray);
    expect(orgStringArray).toEqual(sortedStrings());
  });

  it('#24. MergeSort: object', () => {
    MergeSort(orgObjectArray, (a, b) => a.seq - b.seq);
    expect(orgObjectArray).toEqual(sortedObjects());
  });

  it('#25. MergeSort: already-sorted input stays ascending', () => {
    const arr = [14, 19, 29, 33, 57, 71];
    MergeSort(arr);
    expect(arr).toEqual(sortedNumbers());
  });

  it('#26. MergeSort: descending input becomes ascending', () => {
    const arr = [71, 57, 33, 29, 19, 14];
    MergeSort(arr);
    expect(arr).toEqual(sortedNumbers());
  });

  it('#27. HeapSort: number', () => {
    HeapSort(orgNumArray);
    expect(orgNumArray).toEqual(sortedNumbers());
  });

  it('#28. HeapSort: string', () => {
    HeapSort(orgStringArray);
    expect(orgStringArray).toEqual(sortedStrings());
  });

  it('#29. HeapSort: object', () => {
    HeapSort(orgObjectArray, (a, b) => a.seq - b.seq);
    expect(orgObjectArray).toEqual(sortedObjects());
  });

  it('#30. KMP: finds substring at start', () => {
    expect(KMP('abcabcab', 'abc')).toBe(0);
  });

  it('#31. KMP: finds substring in middle', () => {
    expect(KMP('hello world', 'world')).toBe(6);
  });

  it('#32. KMP: returns null when not found', () => {
    expect(KMP('hello world', 'xyz')).toBeNull();
  });

  it('#33. KMP: overlapping pattern', () => {
    // "aaaa" contains "aa" first at 0; KMP should return the first match.
    expect(KMP('aaaa', 'aa')).toBe(0);
    // "abababc" contains "ababc" starting at index 2.
    expect(KMP('abababc', 'ababc')).toBe(2);
  });

  it('#34. KMP: pattern longer than source returns null', () => {
    expect(KMP('ab', 'abcd')).toBeNull();
  });
});
