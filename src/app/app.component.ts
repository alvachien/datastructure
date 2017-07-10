import { Component, ViewEncapsulation, ElementRef, ChangeDetectionStrategy } from '@angular/core';

const changeDetectionKey = 'mdDemoChangeDetection';

@Component({
  selector: 'home',
  template: `
    <p>Welcome to the Demo of Data Structure which written totally in TypeScript!</p>
    <p>Open the sidenav to choose a demo.</p>
  `
})
export class Home { }

@Component({
  moduleId: module.id,
  selector: 'demo-app-on-push',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppOnPush { }


@Component({
  selector: 'acds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  dark = false;
  changeDetectionStrategy: string;
  navItems = [
    { name: 'KMP Demo', route: 'kmp-demo' },
    { name: 'Autocomplete', route: 'autocomplete' },
    { name: 'Chips', route: 'chips' },
    { name: 'Datepicker', route: 'datepicker' },
    { name: 'Dialog', route: 'dialog' },
    { name: 'Gestures', route: 'gestures' },
    { name: 'Grid List', route: 'grid-list' },
    { name: 'Icon', route: 'icon' },
    { name: 'List', route: 'list' },
    { name: 'Menu', route: 'menu' },
    { name: 'Live Announcer', route: 'live-announcer' },
    { name: 'Overlay', route: 'overlay' },
    { name: 'Portal', route: 'portal' },
    { name: 'Ripple', route: 'ripple' },
    { name: 'Select', route: 'select' },
    { name: 'Sidenav', route: 'sidenav' },
    { name: 'Slider', route: 'slider' },
    { name: 'Slide Toggle', route: 'slide-toggle' },
    { name: 'Snack Bar', route: 'snack-bar' },
    { name: 'Tabs', route: 'tabs' },
    { name: 'Toolbar', route: 'toolbar' },
    { name: 'Tooltip', route: 'tooltip' },
    { name: 'Platform', route: 'platform' },
    { name: 'Style', route: 'style' },
    { name: 'Typography', route: 'typography' }
  ];
  navUIItems = [
    { name: 'Baseline', route: 'baseline' },
    { name: 'Expansion Panel', route: 'expansion' },
    { name: 'Table', route: 'table' },

  ];

  constructor(private _element: ElementRef) {
    // Some browsers will throw when trying to access localStorage in incognito.
    try {
      this.changeDetectionStrategy = window.localStorage.getItem(changeDetectionKey) || 'Default';
    } catch (error) {
      console.error(error);
    }
  }

  toggleFullscreen() {
    let elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleChangeDetection() {
    try {
      this.changeDetectionStrategy = this.changeDetectionStrategy === 'Default' ? 'OnPush' : 'Default';
      window.localStorage.setItem(changeDetectionKey, this.changeDetectionStrategy);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
}
