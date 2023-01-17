import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSummaryComponentComponent } from './workout-summary.component';

describe('WorkoutSummaryComponentComponent', () => {
  let component: WorkoutSummaryComponentComponent;
  let fixture: ComponentFixture<WorkoutSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutSummaryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
