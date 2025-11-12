import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kelsier } from './kelsier';

describe('Kelsier', () => {
  let component: Kelsier;
  let fixture: ComponentFixture<Kelsier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kelsier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kelsier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
