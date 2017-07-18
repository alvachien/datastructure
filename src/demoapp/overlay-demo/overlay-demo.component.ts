import {
  Component,
  ViewChildren,
  QueryList,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  Overlay,
  OverlayState,
  OverlayOrigin,
  ComponentPortal,
  // This import is only used to define a generic type. The current TypeScript version incorrectly
  // considers such imports as unused (https://github.com/Microsoft/TypeScript/issues/14953)
  // tslint:disable-next-line:no-unused-variable
  Portal,
  TemplatePortalDirective,
} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  styleUrls: ['./overlay-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OverlayDemoComponent {

  nextPosition = 0;
  isMenuOpen = false;
  tortelliniFillings = ['cheese and spinach', 'mushroom and broccoli'];

  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
  @ViewChild(OverlayOrigin) _overlayOrigin: OverlayOrigin;
  @ViewChild('tortelliniOrigin') tortelliniOrigin: OverlayOrigin;
  @ViewChild('tortelliniTemplate') tortelliniTemplate: TemplatePortalDirective;

  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  openRotiniPanel() {
    const config = new OverlayState();

    config.positionStrategy = this.overlay.position()
      .global()
      .left(`${this.nextPosition}px`)
      .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
  }

  openFusilliPanel() {
    const config = new OverlayState();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.templatePortals.first);
  }

  openSpaghettiPanel() {
    // TODO(jelbourn): separate overlay demo for connected positioning.
    const strategy = this.overlay.position()
      .connectedTo(
      this._overlayOrigin.elementRef,
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' });

    const config = new OverlayState();
    config.positionStrategy = strategy;

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(SpagettiPanel, this.viewContainerRef));
  }

  openTortelliniPanel() {
    const strategy = this.overlay.position()
      .connectedTo(
      this.tortelliniOrigin.elementRef,
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' });

    const config = new OverlayState();
    config.positionStrategy = strategy;

    const overlayRef = this.overlay.create(config);

    overlayRef.attach(this.tortelliniTemplate);
  }

  openPanelWithBackdrop() {
    const config = new OverlayState();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally();
    config.hasBackdrop = true;
    config.backdropClass = 'cdk-overlay-transparent-backdrop';

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.templatePortals.first);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }

}

/** Simple component to load into an overlay */
@Component({
  moduleId: module.id,
  selector: 'rotini-panel',
  template: '<p class="demo-rotini">Rotini {{value}}</p>'
})
export class RotiniPanel {
  value = 9000;
}

/** Simple component to load into an overlay */
@Component({
  selector: 'spagetti-panel',
  template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
})
export class SpagettiPanel {
  value = 'Omega';
}