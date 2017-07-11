import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveannouncerDemoComponent } from './liveannouncer-demo.component';

describe('LiveannouncerDemoComponent', () => {
  let component: LiveannouncerDemoComponent;
  let fixture: ComponentFixture<LiveannouncerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveannouncerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveannouncerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
