import { TestBed } from '@angular/core/testing';

import { TransformerDateService } from './transformer-date.service';

describe('TransformerDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransformerDateService = TestBed.get(TransformerDateService);
    expect(service).toBeTruthy();
  });
});
