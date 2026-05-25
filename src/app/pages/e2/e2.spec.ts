import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2 } from './e2';

describe('E2', () => {
  let component: E2;
  let fixture: ComponentFixture<E2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E2],
    }).compileComponents();

    fixture = TestBed.createComponent(E2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
