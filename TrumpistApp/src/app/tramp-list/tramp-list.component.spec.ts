import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrampListComponent } from './tramp-list.component';

describe('TrampListComponent', () => {
  let component: TrampListComponent;
  let fixture: ComponentFixture<TrampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrampListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
