import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageAddMoreDataComponent } from './village-add-more-data.component';

describe('VillageAddMoreDataComponent', () => {
  let component: VillageAddMoreDataComponent;
  let fixture: ComponentFixture<VillageAddMoreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillageAddMoreDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageAddMoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
