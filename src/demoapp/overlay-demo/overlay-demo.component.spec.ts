import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDemoComponent } from './overlay-demo.component';

describe('OverlayDemoComponent', () => {
  let component: OverlayDemoComponent;
  let fixture: ComponentFixture<OverlayDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
