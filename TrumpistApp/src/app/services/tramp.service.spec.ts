import { TestBed, inject } from '@angular/core/testing';

import { TrampService } from './tramp.service';

describe('TrampService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrampService]
    });
  });

  it('should be created', inject([TrampService], (service: TrampService) => {
    expect(service).toBeTruthy();
  }));
});
