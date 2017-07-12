import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarytreeDemoComponent } from './binarytree-demo.component';

describe('BinarytreeDemoComponent', () => {
  let component: BinarytreeDemoComponent;
  let fixture: ComponentFixture<BinarytreeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinarytreeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarytreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
