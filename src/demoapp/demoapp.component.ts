import { Component, ViewEncapsulation, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const changeDetectionKey = 'mdDemoChangeDetection';

@Component({
  selector: 'home',
  templateUrl: './demoapp.home.html'
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
  templateUrl: './demoapp.component.html',
  styleUrls: ['./demoapp.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppComponent {
  changeDetectionStrategy: string;
  selectedLanguage: string;
  navItems = [
    { name: 'KMP Demo', route: 'kmp-demo' },
    { name: 'Sorting Algorithm Demo', route: 'sortalg-demo' },
    { name: 'List Demo', route: 'list-demo' },
    { name: 'Tree Demo', route: 'tree-demo' },
    { name: 'Graph Demo', route: 'graph-demo' },
  ];
  navUIItems = [
    { name: 'Subject Demo', route: 'subject-demo' },
  ];
  availableLanguages = [
    { DisplayName: 'Languages.en', Value: 'en' },
    { DisplayName: 'Languages.zh', Value: 'zh' }
  ];

  constructor(private _element: ElementRef,
    private _translate: TranslateService) {
      // Setup the translate
      this.selectedLanguage = 'en';
      this._translate.setDefaultLang('en');
      this._translate.use(this.selectedLanguage);

      try {
        this.changeDetectionStrategy = window.localStorage.getItem(changeDetectionKey) || 'Default';
      } catch (error) {
        console.error(error);
      }
  }

  toggleFullscreen() {
    const elem = this._element.nativeElement.querySelector('.demo-content');
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

  onLanguageChange() {
    if (this._translate.currentLang !== this.selectedLanguage) {
      this._translate.use(this.selectedLanguage);
    }
  }
}
