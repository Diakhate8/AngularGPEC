import { TestBed } from '@angular/core/testing';

import { DecodeJwtTokenService } from './decode-jwt-token.service';

describe('DecodeJwtTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecodeJwtTokenService = TestBed.get(DecodeJwtTokenService);
    expect(service).toBeTruthy();
  });
});
