
import { IList } from './IList';

export class LinkListNode<T> {
    private _data: T;
    private _next:LinkListNode<T> = null;

    constructore() {
        this._next = null;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
    get Next(): LinkListNode<T> {
        return this._next;
    }
    set Next(next: LinkListNode<T>) {
        this._next = next;
    }
}

export class LinkList<T> implements IList<T> {
    private _head: LinkListNode<T> = null;
    private _length: number = 0;

    constructor() {
        this._head = new LinkListNode<T>();
    }

    public Length(): number {
        return this._length;
    }

    public IsEmpty(): boolean {
        return this._length === 0;
    }

    public GetElement(index: number): T | null {
        if (this._length === 0 
            || this._head === null
            || index < 0 
            || index >= this._length)
            return null;
        
        let cur = this._head;
        for(let i = 0; i < index; i ++) {
            if (cur !== null) {
                cur = cur.Next;
            }            
        }

        return cur === null? null : cur.Data;
    }

    public InsertElement(index: number, elem: T): boolean {
        if (index < 0 || index > this._length) return false;
        if (elem === null) return false;

        let cur: LinkListNode<T> = this._head;
        for(let i = 0; i < index; i++) {

        }
        while(cur !== null) {

        }
    }   

    public AppendElement(elem: T) : number {
        let cur: LinkListNode<T> = this._head;
        while(cur !== null) {
            cur = cur.Next;
        }

        let newnode = new LinkListNode<T>();
        newnode.Data = elem;
        newnode.Next = null;

        cur.Next = newnode;

        return ++this._length;
    } 

    public DeleteElement(index: number): boolean {
        return false;
    }
}
