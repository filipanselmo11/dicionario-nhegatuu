import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K } from './k';

describe('K', () => {
  let component: K;
  let fixture: ComponentFixture<K>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [K],
    }).compileComponents();

    fixture = TestBed.createComponent(K);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
