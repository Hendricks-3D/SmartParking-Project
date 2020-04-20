import { TestBed } from '@angular/core/testing';

import { DbUtilityService } from './db-utility.service';

describe('DbUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbUtilityService = TestBed.get(DbUtilityService);
    expect(service).toBeTruthy();
  });
});
