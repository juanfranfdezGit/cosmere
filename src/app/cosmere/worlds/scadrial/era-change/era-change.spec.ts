import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraChange } from './era-change';

describe('EraChange', () => {
  let component: EraChange;
  let fixture: ComponentFixture<EraChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EraChange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EraChange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
