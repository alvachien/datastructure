
import { IBinaryTree } from './ITree';

export class BinaryTreeNode<T> {
    private _data: T;
    private _left: BinaryTreeNode<T> = null;
    private _right: BinaryTreeNode<T> = null;

    constructore() {
        this._left = null;
        this._right = null;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
    get Left(): BinaryTreeNode<T> {
        return this._left;
    }
    set Left(left: BinaryTreeNode<T>) {
        this._left = left;
    }

    get Right(): BinaryTreeNode<T> {
        return this._right;
    }
    set Right(right: BinaryTreeNode<T>) {
        this._right = right;
    }
}

export class BinaryTree<T> {
    private _root: BinaryTreeNode<T> = null;

    get Root() : BinaryTreeNode<T> {
        return this._root;
    }
    set Root(root: BinaryTreeNode<T>) {
        this._root = root;
    }
    
}
