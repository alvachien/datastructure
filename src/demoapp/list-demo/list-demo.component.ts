import { Component, OnInit } from '@angular/core';
import { IListOperateData, ListOperateData } from './listoperatedata';
import { ListOperateDatabase, ListOperateDataSource } from './listdatasource';
import { SequenceList } from '../../lib/model';

@Component({
  selector: 'demoapp-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss']
})
export class ListDemoComponent implements OnInit {
  sqlistDatabase = new ListOperateDatabase();
  sqlistDataSource: ListOperateDataSource | null;
  linklistDatabase = new ListOperateDatabase();
  linklistDataSource: ListOperateDataSource | null;
  displayedColumns = ['ID', 'Name', 'Detail'];
  sqlistObject = new SequenceList<number>();
  sqlistIsInit: boolean = false;
  sqlistID: number = 0;
  SeqListNumberToAdd: number;

  constructor() { }

  ngOnInit() {
    this.sqlistDataSource = new ListOperateDataSource(this.sqlistDatabase);
    this.linklistDataSource = new ListOperateDataSource(this.linklistDatabase);
    this.SeqListNumberToAdd = 0;
  }

  // Sequence list
  public onSeqListInit(): void {
    if (!this.sqlistIsInit) {
      this.sqlistObject.InitList();

      for (let i = 0; i < 10; i++) {
        this.sqlistObject.AppendElement(Math.round(Math.random() * 100));
      }

      this.sqlistDatabase.addOperate({
        ID: ++this.sqlistID,
        Name: 'Init',
        Detail: 'Initial the list with random elements'
      });
      this.sqlistIsInit = true;
    }
  }
  public onSeqListAdd(): void {
    this.sqlistObject.AppendElement(this.SeqListNumberToAdd);
    this.sqlistDatabase.addOperate({
      ID: ++this.sqlistID,
      Name: 'Add',
      Detail: `Add ${ this.SeqListNumberToAdd } to the list`
    });
  }
  public onSeqListPrint(): void {
    this.sqlistDatabase.addOperate({
      ID: ++this.sqlistID,
      Name: 'Print',
      Detail: this.sqlistObject.Print()
    });
  }
  public onSeqListReset(): void {
    this.sqlistIsInit = false;
    this.sqlistObject.ClearAll();
    this.sqlistID = 0;
  }
  
}
