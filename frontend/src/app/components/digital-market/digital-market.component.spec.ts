import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketComponent } from './digital-market.component';

describe('DigitalMarketComponent', () => {
  let component: DigitalMarketComponent;
  let fixture: ComponentFixture<DigitalMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
