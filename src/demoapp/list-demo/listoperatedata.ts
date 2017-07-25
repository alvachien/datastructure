
/**
 * Operate data for the list
 */
export interface IListOperateData {
    ID: number;
    Name: string;
    Detail: string;
}

export class ListOperateData implements IListOperateData {
    private _id: number;
    private _opname: string;
    private _opdetail: string;

    get ID(): number {
        return this._id;
    }
    set ID(id: number) {
        this._id = id;
    }

    get Name(): string {
        return this._opname;
    }
    set Name(opname: string) {
        this._opname = opname;
    }

    get Detail(): string {
        return this._opdetail;
    }
    set Detail(opdtl: string) {
        this._opdetail = opdtl;
    }
}
