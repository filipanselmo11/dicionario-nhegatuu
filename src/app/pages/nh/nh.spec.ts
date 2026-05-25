import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nh } from './nh';

describe('Nh', () => {
  let component: Nh;
  let fixture: ComponentFixture<Nh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nh],
    }).compileComponents();

    fixture = TestBed.createComponent(Nh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
