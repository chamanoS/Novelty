import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMredesignComponent } from './dmredesign.component';

describe('DMredesignComponent', () => {
  let component: DMredesignComponent;
  let fixture: ComponentFixture<DMredesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMredesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMredesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
