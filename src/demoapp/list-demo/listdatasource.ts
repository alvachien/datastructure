import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { IListOperateData, ListOperateData } from './listoperatedata';

/** An database that the data source uses to retrieve data for the table. */
export class ListOperateDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<IListOperateData[]> = new BehaviorSubject<IListOperateData[]>([]);
    get data(): IListOperateData[] { return this.dataChange.value; }

    constructor() {
    }

    /** Adds a new operate. */
    addOperate(od: IListOperateData) {
        const copiedData = this.data.slice();
        copiedData.push(od);
        this.dataChange.next(copiedData);
    }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ListOperateDataSource extends DataSource<any> {
    constructor(private _listopDatabase: ListOperateDatabase) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<IListOperateData[]> {
        return this._listopDatabase.dataChange;
    }

    disconnect() { }
}
