import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormComponentComponent } from './input-form-component';

describe('InputFormComponentComponent', () => {
  let component: InputFormComponentComponent;
  let fixture: ComponentFixture<InputFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
