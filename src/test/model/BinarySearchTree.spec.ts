/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.spec.ts
 *
 */

import { BinarySearchTree } from '../../lib/model/BinarySearchTree';

describe('Test BinarySearchTree', () => {
  let _bsTree: BinarySearchTree<string>;

  beforeEach(() => {
    _bsTree = new BinarySearchTree<string>();
  });

  it('#1. Test creation', () => {
    expect(_bsTree).toBeTruthy();
  });

  it('#2. Test insert', () => {
    // Insert
    let nnode = _bsTree.insert(1, 'A');
    expect(nnode).toBeTruthy();

    nnode = _bsTree.insert(2, 'B');
    expect(nnode).toBeTruthy();

    nnode = _bsTree.insert(3, 'C');
    expect(nnode).toBeTruthy();
  });
});

