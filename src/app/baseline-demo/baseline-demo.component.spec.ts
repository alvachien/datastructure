import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineDemoComponent } from './baseline-demo.component';

describe('BaselineDemoComponent', () => {
  let component: BaselineDemoComponent;
  let fixture: ComponentFixture<BaselineDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselineDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
