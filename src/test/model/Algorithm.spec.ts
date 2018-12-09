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

import { InsertionSort, QuickSort, BubbleSort } from '../../lib/model/Algorithm';

describe('Test Algorithm', () => {
  class TestObject {
    seq: number;
    name: string;
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
});
