import { TestBed } from '@angular/core/testing';

import { SubrogeService } from './subroge.service';

describe('SubrogeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubrogeService = TestBed.get(SubrogeService);
    expect(service).toBeTruthy();
  });
});
