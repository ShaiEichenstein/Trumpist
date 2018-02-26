import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrampRequestListComponent } from './tramp-request-list.component';

describe('TrampRequestListComponent', () => {
  let component: TrampRequestListComponent;
  let fixture: ComponentFixture<TrampRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrampRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrampRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
