import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempItemComponent } from './temp-item.component';

describe('TempItemComponent', () => {
  let component: TempItemComponent;
  let fixture: ComponentFixture<TempItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
