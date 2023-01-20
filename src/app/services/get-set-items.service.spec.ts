import { TestBed } from '@angular/core/testing';

import { GetSetItemsService } from './get-set-items.service';

describe('GetSetItemsService', () => {
  let service: GetSetItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSetItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
