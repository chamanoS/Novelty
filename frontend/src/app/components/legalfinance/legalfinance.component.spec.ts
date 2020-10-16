import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalfinanceComponent } from './legalfinance.component';

describe('LegalfinanceComponent', () => {
  let component: LegalfinanceComponent;
  let fixture: ComponentFixture<LegalfinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalfinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
