/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinarySearchTree.ts
 * Binary search tree
 */

import { IBinaryTreeNode, IBinarySearchTree, BinarySearchTreeCallback } from './ITree';

// Binary search tree node
export class BinarySearchTreeNode<T> implements IBinaryTreeNode<T> {
  public leftNode: BinarySearchTreeNode<T>;
  public rightNode: BinarySearchTreeNode<T>;
  private _key: number;
  private _data: T;

  get key(): number {
    return this._key;
  }
  set key(keynumber: number) {
    this._key = keynumber;
  }
  get data(): T {
    return this._data;
  }
  set data(value: T) {
    this._data = value;
  }

  constructor(key?: number, data?: T) {
    if ((key === undefined && data !== undefined)
      || (key !== undefined && data === undefined)) {
      throw new Error('invalid input');
    }

    if (key !== undefined && data !== undefined) {
      this._key = key;
      this._data = data;
    }
  }
}

// Binary search tree
export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  protected _root: BinarySearchTreeNode<T>;
  get rootNode(): BinarySearchTreeNode<T> {
    return this._root;
  }

  constructor() {
  }

  /**
   * Insert node
   * @param key Key of the node
   * @param data Data of the node
   */
  public insert(key: number, data: T): BinarySearchTreeNode<T> {
    const newnode: BinarySearchTreeNode<T> = new BinarySearchTreeNode<T>(key, data);

    if (this._root === undefined) {
      this._root = newnode;
    } else {
      this.insertNode(this._root, newnode);
    }

    return newnode;
  }

  /**
   * Search
   * @param key Key to search
   */
  public search(key: number): BinarySearchTreeNode<T> {
    return this.searchNode(this._root, key);
  }

  /**
   * In-order traverse
   * @param callback Callback to process each node
   */
  public inOrderTraverse(callback: BinarySearchTreeCallback<T>) {
    this.inOrderTraverseNode(this._root, callback);
  }

  /**
   * Pre-order traverse
   * @param callback Callback to process each node
   */
  public preOrderTraverse(callback: BinarySearchTreeCallback<T>) {
    this.preOrderTraverseNode(this._root, callback);
  }

  /**
   * Post-order traverse
   * @param callback Callback to process each node
   */
  public postOrderTraverse(callback: BinarySearchTreeCallback<T>) {
    this.postOrderTraverseNode(this._root, callback);
  }

  /**
   * Minimum node 
   */
  public min(): BinarySearchTreeNode<T> {
    return this.minNode(this._root);
  }

  /**
   * Maximum node 
   */
  public max(): BinarySearchTreeNode<T> {
    return this.maxNode(this._root);
  }

  /**
   * Remove a node 
   * @param key Key of the node to be deleted
   */
  public remove(key: number) {
  }

  /**
   * @protected
   * In-Order Traverse Node
   */
  protected inOrderTraverseNode(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>) {
    if (node !== undefined) {
      this.inOrderTraverseNode(node.leftNode, callback);
      if (callback !== undefined) {
        callback(node);
      }
      this.inOrderTraverseNode(node.rightNode, callback);
    }
  }

  /**
   * @protected
   * Pre-Order Traverse Node
   */
  protected preOrderTraverseNode(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>) {
    if (node !== undefined) {
      if (callback !== undefined) {
        callback(node);
      }
      this.preOrderTraverseNode(node.leftNode, callback);
      this.preOrderTraverseNode(node.rightNode, callback);
    }
  }

  /**
   * @protected
   * Post-Order Traverse Node
   */
  protected postOrderTraverseNode(node: BinarySearchTreeNode<T>, callback: BinarySearchTreeCallback<T>) {
    if (node !== undefined) {
      this.postOrderTraverseNode(node.leftNode, callback);
      this.postOrderTraverseNode(node.rightNode, callback);
      if (callback !== undefined) {
        callback(node);
      }
    }
  }

  /**
   * @protected
   * Minuimum Node
   */
  protected minNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (node !== undefined) {
      while (node !== undefined && node.leftNode !== undefined) {
        node = node.leftNode;
      }

      return node;
    }

    return undefined;
  }

  /**
   * @protected
   * Maximum Node
   */
  protected maxNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (node !== undefined) {
      while (node !== undefined && node.rightNode !== undefined) {
        node = node.rightNode;
      }

      return node;
    }

    return undefined;
  }

  /**
   * @protected
   * Insert Node
   */
  protected insertNode(parnode: BinarySearchTreeNode<T>,
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

  /**
   * @protected
   * Search Node
   */
  protected searchNode(node: BinarySearchTreeNode<T>, key: number): BinarySearchTreeNode<T> {
    if (node === undefined) {
      return undefined;
    }

    if (key < node.key) {
      return this.searchNode(node.leftNode, key);
    } else if (key > node.key) {
      return this.searchNode(node.rightNode, key);
    } else {
      return node;
    }
  }

  /**
   * @protected
   * Remove Node
   */
  protected removeNode(node: BinarySearchTreeNode<T>, key: number) {
    if (node === undefined) {
      return undefined;
    }

    if (key < node.key) {
      node.leftNode = this.removeNode(node.leftNode, key);
      return node;
    } else if (key > node.key) {
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

      const aux: BinarySearchTreeNode<T> = this.minNode(node.rightNode);
      node.key = aux.key;
      node.rightNode = this.removeNode(node.rightNode, aux.key);
      return node;
    }
  }
}
