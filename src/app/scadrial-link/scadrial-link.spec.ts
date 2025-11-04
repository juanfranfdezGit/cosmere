import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScadrialLink } from './scadrial-link';

describe('ScadrialLink', () => {
  let component: ScadrialLink;
  let fixture: ComponentFixture<ScadrialLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScadrialLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScadrialLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
