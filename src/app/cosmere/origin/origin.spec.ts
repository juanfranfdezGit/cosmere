import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Origin } from './origin';

describe('Origin', () => {
  let component: Origin;
  let fixture: ComponentFixture<Origin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Origin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Origin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
