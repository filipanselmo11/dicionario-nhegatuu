import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I } from './i';

describe('I', () => {
  let component: I;
  let fixture: ComponentFixture<I>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I],
    }).compileComponents();

    fixture = TestBed.createComponent(I);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
