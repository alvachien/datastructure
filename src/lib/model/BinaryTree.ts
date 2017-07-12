
import { IBinaryTreeNode, IBinaryTree } from './ITree';

export class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
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

export class BinaryTree<T> implements IBinaryTree<T> {
    private _root: BinaryTreeNode<T> = null;

    get Root() : BinaryTreeNode<T> {
        return this._root;
    }
    set Root(root: BinaryTreeNode<T>) {
        this._root = root;
    }

    public InorderTraversal(): Array<BinaryTreeNode<T>> {
        let arRst: Array<BinaryTreeNode<T>> = new Array<BinaryTreeNode<T>>();

        return arRst;
    }

    public PreorderTraversal(): Array<BinaryTreeNode<T>> {
        let arRst: Array<BinaryTreeNode<T>> = new Array<BinaryTreeNode<T>>();

        if (this._root !== null) {
            this.PreorderImpl(this._root, arRst);
        }

        return arRst;
    }

    private PreorderImpl(curNode: BinaryTreeNode<T>, arRst: Array<BinaryTreeNode<T>>) {
        if (curNode !== null) {
            arRst.push(curNode);

            this.PreorderImpl(curNode.Left, arRst);
            this.PreorderImpl(curNode.Right, arRst);
        }
    }
    
    public PostorderTraversal(): Array<BinaryTreeNode<T>> {
        let arRst: Array<BinaryTreeNode<T>> = new Array<BinaryTreeNode<T>>();

        return arRst;
    }

    public InsertNode(parNode: BinaryTreeNode<T>, data: T): boolean {
        if (parNode === null && this._root !== null) {
            return false;
        }

        if (parNode === null) {
            let node: BinaryTreeNode<T> = new BinaryTreeNode<T>();
            node.Data = data;
            
            this._root = node;
            return true;
        }

        
        return false;
    }

    public FindNode(elem: T): IBinaryTreeNode<T> | null {
        if (this._root === null) {
            return null;
        }

        let arNodes: Array<BinaryTreeNode<T>> = this.PreorderTraversal();
        for(let nod of arNodes) {
            if (nod.Data === elem) {
                return nod;
            }
        }
    }
}
