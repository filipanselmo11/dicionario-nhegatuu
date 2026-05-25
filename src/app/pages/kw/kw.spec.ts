import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kw } from './kw';

describe('Kw', () => {
  let component: Kw;
  let fixture: ComponentFixture<Kw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kw],
    }).compileComponents();

    fixture = TestBed.createComponent(Kw);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
