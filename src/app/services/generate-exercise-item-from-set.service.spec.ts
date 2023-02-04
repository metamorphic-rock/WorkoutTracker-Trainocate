import { TestBed } from '@angular/core/testing';

import { GenerateExerciseItemFromSetService } from './generate-exercise-item-from-set.service';

describe('GenerateExerciseItemFromSetService', () => {
  let service: GenerateExerciseItemFromSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateExerciseItemFromSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
