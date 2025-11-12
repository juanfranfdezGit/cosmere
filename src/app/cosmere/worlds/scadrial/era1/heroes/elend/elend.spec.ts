import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elend } from './elend';

describe('Elend', () => {
  let component: Elend;
  let fixture: ComponentFixture<Elend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
