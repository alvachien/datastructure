import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-demo',
  templateUrl: './expansion-demo.component.html',
  styleUrls: ['./expansion-demo.component.scss']
})
export class ExpansionDemoComponent implements OnInit {
  displayMode = 'default';
  multi = false;
  hideToggle = false;
  showPanel3 = true;

  constructor() { }

  ngOnInit() {
  }

}
