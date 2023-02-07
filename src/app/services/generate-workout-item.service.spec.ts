import { TestBed } from '@angular/core/testing';

import { GenerateWorkoutItemService } from './generate-workout-item.service';

describe('GenerateWorkoutItemService', () => {
  let service: GenerateWorkoutItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateWorkoutItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
