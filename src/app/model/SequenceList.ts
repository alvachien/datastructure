
import { IList } from './IList';

export class SequenceList<T> implements IList<T> {
    constructor() {        
    }

    private _data: T[] = [];

    public InitList() {
    }

    public IsEmpty(): boolean {
        return this._data.length === 0;
    }

    public ClearList() {

    }

    public GetElement(index: number): T | null {
        return null;
    }

    public LocateElem(elem) {

    }

    public InsertElement(elem) {

    }
    public Delete(index) {

    }
    
    public Length(): number {
        return this._data.length;
    }
}