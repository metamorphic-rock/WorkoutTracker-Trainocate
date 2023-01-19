import { TestBed } from '@angular/core/testing';

import { CalculateVolumeService } from './calculate-volume.service';

describe('CalculateVolumeService', () => {
  let service: CalculateVolumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateVolumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
