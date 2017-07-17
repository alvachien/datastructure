import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmpDemoComponent } from './kmp-demo.component';

describe('KmpDemoComponent', () => {
  let component: KmpDemoComponent;
  let fixture: ComponentFixture<KmpDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmpDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
