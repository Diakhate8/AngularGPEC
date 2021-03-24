import { TestBed } from '@angular/core/testing';

import { AjoutUserService } from './ajout-user.service';

describe('AjoutUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutUserService = TestBed.get(AjoutUserService);
    expect(service).toBeTruthy();
  });
});
