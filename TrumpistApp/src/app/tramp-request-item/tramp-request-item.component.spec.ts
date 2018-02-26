import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrampRequestItemComponent } from './tramp-request-item.component';

describe('TrampRequestItemComponent', () => {
  let component: TrampRequestItemComponent;
  let fixture: ComponentFixture<TrampRequestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrampRequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrampRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
