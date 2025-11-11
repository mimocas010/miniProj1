import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OqueFaco } from './oque-faco';

describe('OqueFaco', () => {
  let component: OqueFaco;
  let fixture: ComponentFixture<OqueFaco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OqueFaco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OqueFaco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
