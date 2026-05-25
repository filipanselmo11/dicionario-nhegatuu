import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W } from './w';

describe('W', () => {
  let component: W;
  let fixture: ComponentFixture<W>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [W],
    }).compileComponents();

    fixture = TestBed.createComponent(W);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
