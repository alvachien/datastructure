
export interface IList<T> {
    /*
        Return the length
     */
    Length(): number;
    IsEmpty(): boolean;
    GetElement(index: number): T | null;
    InsertElement(elem: T);
    DeleteElement(index: number): boolean;

    readonly [index: number]: T;

}
