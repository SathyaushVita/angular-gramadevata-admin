import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreTempleDataComponent } from './add-more-temple-data.component';

describe('AddMoreTempleDataComponent', () => {
  let component: AddMoreTempleDataComponent;
  let fixture: ComponentFixture<AddMoreTempleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoreTempleDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMoreTempleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
