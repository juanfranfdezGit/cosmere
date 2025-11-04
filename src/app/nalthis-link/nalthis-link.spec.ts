import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalthisLink } from './nalthis-link';

describe('NalthisLink', () => {
  let component: NalthisLink;
  let fixture: ComponentFixture<NalthisLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NalthisLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NalthisLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
