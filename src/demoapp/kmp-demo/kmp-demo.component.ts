import { Component, OnInit } from '@angular/core';
import * as DSModel from '../../lib/model';

@Component({
  moduleId: module.id,
  selector: 'app-kmp-demo',
  templateUrl: './kmp-demo.component.html',
  styleUrls: ['./kmp-demo.component.scss']
})
export class KmpDemoComponent implements OnInit {
  SourceString: string;
  SearchString: string;
  DetailSteps: string;

  constructor() { }

  ngOnInit() {
  }

  onCalc() {
    console.log('Entering onCalc');

    const f = DSModel.KMP(this.SourceString, this.SearchString);
    if (f === null) {
      this.DetailSteps = 'No found!';
    } else {
      this.DetailSteps = 'Found at position: ' + f.toString();
    }
  }
}
