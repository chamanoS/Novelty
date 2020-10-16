import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPsComponent } from './forgot-ps.component';

describe('ForgotPsComponent', () => {
  let component: ForgotPsComponent;
  let fixture: ComponentFixture<ForgotPsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
