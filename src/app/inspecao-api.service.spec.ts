import { TestBed } from '@angular/core/testing';

import { InspecaoApiService } from '../services/inspecao-api.service';

describe('InspecaoApiService', () => {
  let service: InspecaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspecaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
