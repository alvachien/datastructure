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

import { BinarySearchTreeCallback } from '../../lib/model/ITree';
import { BinarySearchTree } from '../../lib/model/BinarySearchTree';

describe('Test BinarySearchTree', () => {
  let _bsTree: BinarySearchTree<string>;

  beforeEach(() => {
    _bsTree = new BinarySearchTree<string>();
  });

  it('#1. Test creation', () => {
    expect(_bsTree).toBeTruthy();
  });

  it('#1a. search on an empty tree returns undefined (honest return type).', () => {
    // Regression for issue 3.2: search returned searchNode(...)! , non-null-
    // asserting away the undefined that an empty tree produces. The return type
    // now honestly admits undefined.
    expect(_bsTree.search(1)).toBeUndefined();
  });

  it('#1b. traversals on an empty tree must not throw.', () => {
    // _root is undefined until the first insert; the traversal guards must
    // short-circuit rather than recurse into an undefined node.
    const cb = (n: { key: number }) => { throw new Error(`should not visit ${n.key}`); };
    expect(() => _bsTree.inOrderTraverse(cb)).not.toThrow();
    expect(() => _bsTree.preOrderTraverse(cb)).not.toThrow();
    expect(() => _bsTree.postOrderTraverse(cb)).not.toThrow();
  });

  it('#1c. min/max on an empty tree return undefined (not throw).', () => {
    expect(_bsTree.min()).toBeUndefined();
    expect(_bsTree.max()).toBeUndefined();
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

  const buildTestTree = () => {
    _bsTree.insert(11, '11');
    _bsTree.insert(7, '7');
    _bsTree.insert(15, '15');
    _bsTree.insert(5, '5');
    _bsTree.insert(3, '3');
    _bsTree.insert(9, '9');
    _bsTree.insert(8, '8');
    _bsTree.insert(10, '10');
    _bsTree.insert(13, '13');
    _bsTree.insert(12, '12');
    _bsTree.insert(14, '14');
    _bsTree.insert(20, '20');
    _bsTree.insert(18, '18');
    _bsTree.insert(25, '25');
    _bsTree.insert(6, '6');
  };

  it('#3. Test inOrderTraverse', () => {
    // Build test tree
    buildTestTree();

    let _rst = '';
    _bsTree.inOrderTraverse((value) => {
      if (_rst === '') {
        _rst = value.data;
      } else {
        _rst += ',' + value.data;
      }
    });

    expect(_rst).toBe('3,5,6,7,8,9,10,11,12,13,14,15,18,20,25');
  });

  it('#4. Test preOrderTraverse', () => {
    // Build test tree
    buildTestTree();

    let _rst = '';
    _bsTree.preOrderTraverse((value) => {
      if (_rst === '') {
        _rst = value.data;
      } else {
        _rst += ',' + value.data;
      }
    });

    expect(_rst).toBe('11,7,5,3,6,9,8,10,15,13,12,14,20,18,25');
  });

  it('#5. Test postOrderTraverse', () => {
    // Build test tree
    buildTestTree();

    let _rst = '';
    _bsTree.postOrderTraverse((value) => {
      if (_rst === '') {
        _rst = value.data;
      } else {
        _rst += ',' + value.data;
      }
    });

    expect(_rst).toBe('3,6,5,8,10,9,7,12,14,13,18,25,20,15,11');
  });

  it('#6. Test min', () => {
    // Build test tree
    buildTestTree();

    const minnode = _bsTree.min();
    expect(minnode).toBeTruthy();
    expect(minnode!.key).toBe(3);
  });

  it('#7. Test max', () => {
    // Build test tree
    buildTestTree();

    const maxnode = _bsTree.max();
    expect(maxnode).toBeTruthy();
    expect(maxnode!.key).toBe(25);
  });

  it('#8. Test search', () => {
    // Build test tree
    buildTestTree();

    let node = _bsTree.search(1);
    expect(node).toBeFalsy();

    node = _bsTree.search(8);
    expect(node).toBeTruthy();
    expect(node!.key).toBe(8);
  });

  const inorderKeys = () => {
    const arr: number[] = [];
    _bsTree.inOrderTraverse((n) => arr.push(n.key));
    return arr;
  };

  it('#9. Test remove: leaf node', () => {
    // 3 is a leaf.
    buildTestTree();
    expect(_bsTree.remove(3)).toBe(true);
    expect(_bsTree.search(3)).toBeFalsy();
    expect(inorderKeys()).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
  });

  it('#10. Test remove: node with one child', () => {
    // 12 is the left child of 13 and has no children originally; insert a
    // child under it to exercise the single-child deletion.
    buildTestTree();
    _bsTree.insert(11.5, '11.5'); // becomes left child of 12
    // 12 now has one child (11.5). Remove 12.
    expect(_bsTree.remove(12)).toBe(true);
    expect(_bsTree.search(12)).toBeFalsy();
    expect(_bsTree.search(11.5)).toBeTruthy();
    const keys = inorderKeys();
    expect(keys).not.toContain(12);
    expect(keys).toContain(11.5);
    // In-order still sorted.
    const sorted = [...keys].sort((a, b) => a - b);
    expect(keys).toEqual(sorted);
  });

  it('#11. Test remove: node with two children', () => {
    // 9 has children 8 and 10.
    buildTestTree();
    expect(_bsTree.remove(9)).toBe(true);
    expect(_bsTree.search(9)).toBeFalsy();
    // 8 and 10 remain.
    expect(_bsTree.search(8)).toBeTruthy();
    expect(_bsTree.search(10)).toBeTruthy();
    expect(inorderKeys()).toEqual([3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
  });

  it('#12. Test remove: root (two children)', () => {
    buildTestTree();
    expect(_bsTree.remove(11)).toBe(true);
    expect(_bsTree.search(11)).toBeFalsy();
    const keys = inorderKeys();
    expect(keys).not.toContain(11);
    expect(keys.length).toBe(14);
    // BST property preserved (ascending).
    const sorted = [...keys].sort((a, b) => a - b);
    expect(keys).toEqual(sorted);
    // Root replaced by in-order successor (12).
    expect(_bsTree.rootNode.key).toBe(12);
  });

  it('#13. Test remove: not found', () => {
    buildTestTree();
    expect(_bsTree.remove(999)).toBe(false);
    // Tree unchanged: 15 nodes, still sorted.
    expect(inorderKeys().length).toBe(15);
  });

  it('#14. Test remove: empty tree', () => {
    expect(_bsTree.remove(1)).toBe(false);
  });

  it('#15. Test remove: data replaced by successor (two-children case)', () => {
    // Removing a node with two children must take the successor's data too,
    // not just its key. Build a root with both children so the two-children
    // branch is exercised.
    _bsTree.insert(10, 'A');
    _bsTree.insert(5, 'L');   // left child of root
    _bsTree.insert(15, 'R');  // right child of root
    _bsTree.insert(12, 'M'); // left of 15 -> successor of root (min of right subtree)
    expect(_bsTree.remove(10)).toBe(true);
    // Root replaced by in-order successor 12, including its data 'M'.
    expect(_bsTree.rootNode.key).toBe(12);
    expect(_bsTree.rootNode.data).toBe('M');
  });
});

