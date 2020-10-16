import { TestBed } from '@angular/core/testing';

import { InformationServiceService } from './information-service.service';

describe('InformationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationServiceService = TestBed.get(InformationServiceService);
    expect(service).toBeTruthy();
  });
});
