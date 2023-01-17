import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTableComponentComponent } from './output-table-component';

describe('OutputTableComponentComponent', () => {
  let component: OutputTableComponentComponent;
  let fixture: ComponentFixture<OutputTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
