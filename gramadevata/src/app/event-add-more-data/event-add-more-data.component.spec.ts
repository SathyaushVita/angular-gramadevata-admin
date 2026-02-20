import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddMoreDataComponent } from './event-add-more-data.component';

describe('EventAddMoreDataComponent', () => {
  let component: EventAddMoreDataComponent;
  let fixture: ComponentFixture<EventAddMoreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAddMoreDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAddMoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
