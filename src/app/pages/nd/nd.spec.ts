import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nd } from './nd';

describe('Nd', () => {
  let component: Nd;
  let fixture: ComponentFixture<Nd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nd],
    }).compileComponents();

    fixture = TestBed.createComponent(Nd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
