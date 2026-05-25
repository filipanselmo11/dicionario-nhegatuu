import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U2 } from './u2';

describe('U2', () => {
  let component: U2;
  let fixture: ComponentFixture<U2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [U2],
    }).compileComponents();

    fixture = TestBed.createComponent(U2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
