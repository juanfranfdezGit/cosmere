import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scadrial } from './scadrial';

describe('Scadrial', () => {
  let component: Scadrial;
  let fixture: ComponentFixture<Scadrial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scadrial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scadrial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
