import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetHospitalsComponent } from './vet-hospitals.component';

describe('VetHospitalsComponent', () => {
  let component: VetHospitalsComponent;
  let fixture: ComponentFixture<VetHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetHospitalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
