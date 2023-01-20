import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerIndexComponent } from './tracker-index.component';

describe('TrackerIndexComponent', () => {
  let component: TrackerIndexComponent;
  let fixture: ComponentFixture<TrackerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
