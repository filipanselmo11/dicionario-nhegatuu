import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nt } from './nt';

describe('Nt', () => {
  let component: Nt;
  let fixture: ComponentFixture<Nt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nt],
    }).compileComponents();

    fixture = TestBed.createComponent(Nt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
