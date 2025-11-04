import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelLink } from './sel-link';

describe('SelLink', () => {
  let component: SelLink;
  let fixture: ComponentFixture<SelLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
