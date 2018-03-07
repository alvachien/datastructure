/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.ts
 *
 */

export class BinarySearchTreeNode<T> {
  public leftNode: BinarySearchTreeNode<T>;
  public rightNode: BinarySearchTreeNode<T>;
  private _key: number;
  private _value: T;

  get Key(): number {
    return this._key;
  }
  set Key(key: number) {
    this._key = key;
  }
  get Value(): T {
    return this._value;
  }
  set Value(value: T) {
    this._value = value;
  }

  constructor(key?: number, value?: T) {
    if ((key === undefined && value !== undefined)
      || (key !== undefined && value === undefined)) {
      throw new Error('invalid input');
    }

    if (key !== undefined && value !== undefined) {
      this._key = key;
      this._value = value;
    }
  }
}

export class BinarySearchTree<T> {
  public root: BinarySearchTreeNode<T>;

  constructor() {
  }

  public insert(key: number, value: T) {
    let newnode: BinarySearchTreeNode<T> = new BinarySearchTreeNode<T>(key, value);

    if (this.root === undefined) {
      this.root = newnode;
    } else {

    }
  }

  private insertNode(parnode: BinarySearchTreeNode<T>,
    newnode: BinarySearchTreeNode<T>) {
    if (newnode.Key < parnode.Key) {
      if (parnode.leftNode === undefined) {
        parnode.leftNode = newnode;
      } else {
        this.insertNode(parnode.leftNode, newnode);
      }
    } else {
      if (parnode.rightNode === undefined) {
        parnode.rightNode = newnode;
      } else {
        this.insertNode(parnode.rightNode, newnode);
      }
    }
  }

  public search(key: number) {

  }

  public inOrderTraverse() {

  }
  public preOrderTraverse() {

  }
  public postOrderTraverse() {

  }
  public min() {

  }
  public max() {

  }
  public remove(key: number) {

  }
}
