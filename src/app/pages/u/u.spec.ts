import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U } from './u';

describe('U', () => {
  let component: U;
  let fixture: ComponentFixture<U>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [U],
    }).compileComponents();

    fixture = TestBed.createComponent(U);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
