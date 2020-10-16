import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalJourneyComponent } from './legal-journey.component';

describe('LegalJourneyComponent', () => {
  let component: LegalJourneyComponent;
  let fixture: ComponentFixture<LegalJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
