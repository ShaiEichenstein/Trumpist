import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrampItemComponent } from './tramp-item.component';

describe('TrampItemComponent', () => {
  let component: TrampItemComponent;
  let fixture: ComponentFixture<TrampItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrampItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrampItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
