import {Component, ViewChildren, QueryList} from '@angular/core';
import {
    Portal,
    ComponentPortal,
    TemplatePortalDirective,
} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-portal-demo',
  templateUrl: './portal-demo.component.html',
  styleUrls: ['./portal-demo.component.scss']
})
export class PortalDemoComponent {

  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

  selectedPortal: Portal<any>;

  get programmingJoke() {
    return this.templatePortals.first;
  }

  get mathJoke() {
    return this.templatePortals.last;
  }

  get scienceJoke() {
    return new ComponentPortal(ScienceJoke);
  }
}


@Component({
  moduleId: module.id,
  selector: 'science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`
})
export class ScienceJoke { }