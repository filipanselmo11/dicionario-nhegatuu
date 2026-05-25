import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S } from './s';

describe('S', () => {
  let component: S;
  let fixture: ComponentFixture<S>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S],
    }).compileComponents();

    fixture = TestBed.createComponent(S);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
