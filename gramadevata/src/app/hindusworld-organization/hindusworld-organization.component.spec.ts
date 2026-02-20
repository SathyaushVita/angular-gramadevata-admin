import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindusworldOrganizationComponent } from './hindusworld-organization.component';

describe('HindusworldOrganizationComponent', () => {
  let component: HindusworldOrganizationComponent;
  let fixture: ComponentFixture<HindusworldOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindusworldOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindusworldOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
