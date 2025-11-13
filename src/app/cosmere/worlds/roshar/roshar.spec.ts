import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roshar } from './roshar';

describe('Roshar', () => {
  let component: Roshar;
  let fixture: ComponentFixture<Roshar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roshar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roshar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
