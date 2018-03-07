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
  let _bsTree: BinarySearchTree<number>;

  beforeEach(() => {
    _bsTree = new BinarySearchTree<number>();
  });

  it("#1. Test set, values, has and size()", () => {
    expect(_bsTree).toBeTruthy();
  });
});

