import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphs2Component } from './graphs2.component';

describe('Graphs2Component', () => {
  let component: Graphs2Component;
  let fixture: ComponentFixture<Graphs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
