import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N } from './n';

describe('N', () => {
  let component: N;
  let fixture: ComponentFixture<N>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [N],
    }).compileComponents();

    fixture = TestBed.createComponent(N);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
