import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I2 } from './i2';

describe('I2', () => {
  let component: I2;
  let fixture: ComponentFixture<I2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I2],
    }).compileComponents();

    fixture = TestBed.createComponent(I2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
