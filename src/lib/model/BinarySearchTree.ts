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
  public key: number;
  public value: T;
}

export class BinarySearchTree<T> {
  public root: BinarySearchTreeNode<T>;

  constructor() {
  }

  public insert(key: number, value: T) {
    let newnode: BinarySearchTreeNode<T> = new BinarySearchTreeNode<T>();
    newnode.key = key;
    newnode.value = value;

    if (this.root === undefined) {
      this.root = newnode;
    } else {

    }
  }

  private insertNode(parnode: BinarySearchTreeNode<T>, 
    newnode: BinarySearchTreeNode<T>) {
      if (newnode.key < parnode.key) {
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
