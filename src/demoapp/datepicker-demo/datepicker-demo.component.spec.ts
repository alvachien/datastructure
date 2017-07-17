import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDemoComponent } from './datepicker-demo.component';

describe('DatepickerDemoComponent', () => {
  let component: DatepickerDemoComponent;
  let fixture: ComponentFixture<DatepickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
