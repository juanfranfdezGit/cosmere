import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosharLink } from './roshar-link';

describe('RosharLink', () => {
  let component: RosharLink;
  let fixture: ComponentFixture<RosharLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RosharLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RosharLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
