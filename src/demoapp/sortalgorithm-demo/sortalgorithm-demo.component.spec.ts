import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortalgorithmDemoComponent } from './sortalgorithm-demo.component';

describe('SortalgorithmDemoComponent', () => {
  let component: SortalgorithmDemoComponent;
  let fixture: ComponentFixture<SortalgorithmDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortalgorithmDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortalgorithmDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
