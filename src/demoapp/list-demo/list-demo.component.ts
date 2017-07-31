import { Component, OnInit } from '@angular/core';
import { IListOperateData, ListOperateData } from './listoperatedata';
import { ListOperateDatabase, ListOperateDataSource } from './listdatasource';
import { SequenceList, LinkList } from '../../lib/model';

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
  sqlistIsInit = false;
  sqlistID = 0;
  SeqListNumberToAdd: number;
  SeqListPositionToInsert: number;
  SeqListNumberToInsert: number;
  linklistObject = new LinkList<number>();
  linklistIsInit = false;
  linklistID = 0;
  LinkListNumberToAdd: number;
  LinkListPositionToInsert: number;
  LinkListNumberToInsert: number;

  constructor() {
  }

  ngOnInit() {
    this.sqlistDataSource = new ListOperateDataSource(this.sqlistDatabase);
    this.linklistDataSource = new ListOperateDataSource(this.linklistDatabase);

    this.SeqListNumberToAdd = 0;
    this.SeqListNumberToInsert = 0;
    this.SeqListPositionToInsert = 0;
    this.LinkListNumberToAdd = 0;
    this.LinkListPositionToInsert = 0;
    this.LinkListNumberToInsert = 0;
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
  public onSeqListAppend(): void {
    this.sqlistObject.AppendElement(this.SeqListNumberToAdd);
    this.sqlistDatabase.addOperate({
      ID: ++this.sqlistID,
      Name: 'Add',
      Detail: `Add ${this.SeqListNumberToAdd} to the list`
    });
  }
  public onSeqListInsert(): void {
    if (!this.sqlistObject.InsertElement(this.SeqListPositionToInsert, this.SeqListNumberToInsert)) {
      this.sqlistDatabase.addOperate({
        ID: ++this.sqlistID,
        Name: 'INSERT',
        Detail: `Failed to insert ${this.SeqListNumberToInsert} at position ${this.SeqListPositionToInsert} to the list`
      });
    } else {
      this.sqlistDatabase.addOperate({
        ID: ++this.sqlistID,
        Name: 'INSERT',
        Detail: `INSERTED ${this.SeqListNumberToInsert} at position ${this.SeqListPositionToInsert} to the list`
      });
    }
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

  // Link list
  public onLinkListInit(): void {
    if (!this.linklistIsInit) {
      // No Init for Linklist?
      // this.linklistObject.In();

      for (let i = 0; i < 10; i++) {
        this.linklistObject.AppendElement(Math.round(Math.random() * 100));
      }

      this.linklistDatabase.addOperate({
        ID: ++this.linklistID,
        Name: 'Init',
        Detail: 'Initial the list with random elements'
      });
      this.linklistIsInit = true;
    }
  }
  public onLinkListAppend(): void {
    this.linklistObject.AppendElement(this.LinkListNumberToAdd);
    this.linklistDatabase.addOperate({
      ID: ++this.linklistID,
      Name: 'Add',
      Detail: `Add ${this.LinkListNumberToAdd} to the list`
    });
  }
  public onLinkListInsert(): void {
    if (!this.linklistObject.InsertElement(this.LinkListPositionToInsert, this.LinkListNumberToInsert)) {
      this.linklistDatabase.addOperate({
        ID: ++this.linklistID,
        Name: 'INSERT',
        Detail: `Failed to insert ${this.LinkListNumberToInsert} at position ${this.LinkListPositionToInsert} to the list`
      });
    } else {
      this.linklistDatabase.addOperate({
        ID: ++this.linklistID,
        Name: 'INSERT',
        Detail: `INSERTED ${this.LinkListNumberToInsert} at position ${this.LinkListPositionToInsert} to the list`
      });
    }
  }
  public onLinkListPrint(): void {
    this.linklistDatabase.addOperate({
      ID: ++this.linklistID,
      Name: 'Print',
      Detail: this.linklistObject.Print()
    });
  }

  public onLinkListReset(): void {
    this.linklistIsInit = false;
    this.linklistObject.ClearAll();
    this.linklistID = 0;
  }
}
