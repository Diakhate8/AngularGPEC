import { TestBed } from '@angular/core/testing';

import { EcheancierService } from './echeancier.service';

describe('EcheancierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcheancierService = TestBed.get(EcheancierService);
    expect(service).toBeTruthy();
  });
});
