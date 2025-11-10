import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cosmere } from './cosmere';

describe('Cosmere', () => {
  let component: Cosmere;
  let fixture: ComponentFixture<Cosmere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cosmere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cosmere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
