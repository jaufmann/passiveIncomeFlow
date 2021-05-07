import { TestBed } from '@angular/core/testing';

import { GenericContentfulDomManipulatorService } from './generic-contentful-dom-manipulator.service';

describe('GenericContentfulDomManipulatorService', () => {
  let service: GenericContentfulDomManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericContentfulDomManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
