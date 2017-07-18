import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-liveannouncer-demo',
  templateUrl: './liveannouncer-demo.component.html',
  styleUrls: ['./liveannouncer-demo.component.scss']
})
export class LiveannouncerDemoComponent implements OnInit {

  constructor(private live: LiveAnnouncer) { }

  announceText(message: string) {
    this.live.announce(message);
  }

  ngOnInit() {
  }

}
