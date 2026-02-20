import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoshalaAddMoreDataComponent } from './goshala-add-more-data.component';

describe('GoshalaAddMoreDataComponent', () => {
  let component: GoshalaAddMoreDataComponent;
  let fixture: ComponentFixture<GoshalaAddMoreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoshalaAddMoreDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoshalaAddMoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
