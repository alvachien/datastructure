import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id, 
  selector: 'app-datepicker-demo',
  templateUrl: './datepicker-demo.component.html',
  styleUrls: ['./datepicker-demo.component.scss']
})
export class DatepickerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  touch: boolean;
  filterOdd: boolean;
  yearView: boolean;
  inputDisabled: boolean;
  datepickerDisabled: boolean;
  minDate: Date;
  maxDate: Date;
  startAt: Date;
  date: Date;
  dateFilter = (date: Date) => date.getMonth() % 2 == 1 && date.getDate() % 2 == 0;
}
