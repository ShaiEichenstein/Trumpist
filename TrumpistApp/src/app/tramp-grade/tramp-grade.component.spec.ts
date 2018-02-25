import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrampGradeComponent } from './tramp-grade.component';

describe('TrampGradeComponent', () => {
  let component: TrampGradeComponent;
  let fixture: ComponentFixture<TrampGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrampGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrampGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
