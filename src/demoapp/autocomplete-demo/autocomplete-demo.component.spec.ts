import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDemoComponent } from './autocomplete-demo.component';

describe('AutocompleteDemoComponent', () => {
  let component: AutocompleteDemoComponent;
  let fixture: ComponentFixture<AutocompleteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
