import { Component, OnInit } from '@angular/core';
import { FocusOriginMonitor } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styleUrls: ['./style-demo.component.scss']
})
export class StyleDemoComponent implements OnInit {

  constructor(public fom: FocusOriginMonitor) { }

  ngOnInit() {
  }

}
