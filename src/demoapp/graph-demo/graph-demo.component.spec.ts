import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDemoComponent } from './graph-demo.component';

describe('GraphDemoComponent', () => {
  let component: GraphDemoComponent;
  let fixture: ComponentFixture<GraphDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
