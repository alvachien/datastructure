import { callbackify } from "util";

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

  public search(key: number): BinarySearchTreeNode<T> {
    return this.searchNode(this.root, key);
  }

  public inOrderTraverse(callback: (node: BinarySearchTreeNode<T>) => void) {
    this.inOrderTraverseNode(this.root, callback);
  }
  public preOrderTraverse(callback: (node: BinarySearchTreeNode<T>) => void) {
    this.preOrderTraverseNode(this.root, callback);
  }
  public postOrderTraverse(callback: (node: BinarySearchTreeNode<T>) => void) {
    this.postOrderTraverseNode(this.root, callback);
  }
  public min(): BinarySearchTreeNode<T> {
    return this.minNode(this.root);
  }
  public max(): BinarySearchTreeNode<T> {
    return this.maxNode(this.root);
  }
  public remove(key: number) {

  }

  private inOrderTraverseNode(node: BinarySearchTreeNode<T>, 
    callback: (node: BinarySearchTreeNode<T>) => void) {
    if (node !== undefined) {
      this.inOrderTraverseNode(node.leftNode, callback);
      if (callback !== undefined) {
        callback(node);
      }
      this.inOrderTraverseNode(node.rightNode, callback);
    }
  }
  private preOrderTraverseNode(node: BinarySearchTreeNode<T>,
    callback: (node: BinarySearchTreeNode<T>) => void) {
    if (node !== undefined) {
      if (callback !== undefined) {
        callback(node);
      }
      this.preOrderTraverseNode(node.leftNode, callback);
      this.preOrderTraverseNode(node.rightNode, callback);
    }
  }
  private postOrderTraverseNode(node: BinarySearchTreeNode<T>,
    callback: (node: BinarySearchTreeNode<T>) => void) {
    if (node !== undefined) {
      this.postOrderTraverseNode(node.leftNode, callback);
      this.postOrderTraverseNode(node.rightNode, callback);
      if (callback !== undefined) {
        callback(node);
      }
    }
  }

  private minNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (node !== undefined) {
      while(node !== undefined && node.leftNode !== undefined) {
        node = node.leftNode;
      }

      return node;
    }

    return undefined;
  }
  private maxNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (node !== undefined) {
      while(node !== undefined && node.rightNode !== undefined) {
        node = node.rightNode;
      }

      return node;
    }

    return undefined;
  }
  private searchNode(node: BinarySearchTreeNode<T>, key: number): BinarySearchTreeNode<T> {
    if (node === undefined) {
      return undefined;
    }

    if (key < node.Key) {
      return this.searchNode(node.leftNode, key);
    } else if (key > node.Key) {
      return this.searchNode(node.rightNode, key);
    } else {
      return node;
    }
  }
  private removeNode(node: BinarySearchTreeNode<T>, key: number) {
    if (node === undefined) {
      return undefined;
    }

    if (key < node.Key) {
      node.leftNode = this.removeNode(node.leftNode, key);
      return node;
    } else if (key > node.Key) {
      node.rightNode = this.removeNode(node.rightNode, key);
      return node;
    } else {
      if (node.leftNode === undefined && node.rightNode === undefined) {
        node = undefined;
        return node;
      }

      if (node.leftNode === undefined) {
        node = node.rightNode;
        return node;
      } else if (node.rightNode === undefined) {
        node = node.leftNode;
        return node;
      }

      let aux;
      // let aux = findMinNode(node.rightNode);
      node.Key = aux.Key;
      node.rightNode = this.removeNode(node.rightNode, aux.Key);
      return node;
    }
  }
}
