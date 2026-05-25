import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb } from './mb';

describe('Mb', () => {
  let component: Mb;
  let fixture: ComponentFixture<Mb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mb],
    }).compileComponents();

    fixture = TestBed.createComponent(Mb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
