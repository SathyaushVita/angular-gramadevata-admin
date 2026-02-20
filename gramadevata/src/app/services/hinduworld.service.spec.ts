import { TestBed } from '@angular/core/testing';

import { HinduworldService } from './hinduworld.service';

describe('HinduworldService', () => {
  let service: HinduworldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HinduworldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
