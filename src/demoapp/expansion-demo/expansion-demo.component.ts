import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-demo',
  templateUrl: './expansion-demo.component.html',
  styleUrls: ['./expansion-demo.component.scss']
})
export class ExpansionDemoComponent implements OnInit {
  displayMode: string = 'default';
  multi: boolean = false;
  hideToggle: boolean = false;
  showPanel3 = true;
  
  constructor() { }

  ngOnInit() {
  }

}
