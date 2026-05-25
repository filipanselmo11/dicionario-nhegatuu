import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M } from './m';

describe('M', () => {
  let component: M;
  let fixture: ComponentFixture<M>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M],
    }).compileComponents();

    fixture = TestBed.createComponent(M);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
