import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R } from './r';

describe('R', () => {
  let component: R;
  let fixture: ComponentFixture<R>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [R],
    }).compileComponents();

    fixture = TestBed.createComponent(R);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
