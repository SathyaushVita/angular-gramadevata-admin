import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorsComponent } from './tour-operators.component';

describe('TourOperatorsComponent', () => {
  let component: TourOperatorsComponent;
  let fixture: ComponentFixture<TourOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
