import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeSpinnerComponent } from './bridge-spinner.component';

describe('BridgeSpinnerComponent', () => {
  let component: BridgeSpinnerComponent;
  let fixture: ComponentFixture<BridgeSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
