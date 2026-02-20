import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuidesComponent } from './tour-guides.component';

describe('TourGuidesComponent', () => {
  let component: TourGuidesComponent;
  let fixture: ComponentFixture<TourGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourGuidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
