import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp } from './mp';

describe('Mp', () => {
  let component: Mp;
  let fixture: ComponentFixture<Mp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mp],
    }).compileComponents();

    fixture = TestBed.createComponent(Mp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
