import { TestBed } from '@angular/core/testing';

import { FirebaseDBServiceService } from './firebase-dbservice.service';

describe('FirebaseDBServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseDBServiceService = TestBed.get(FirebaseDBServiceService);
    expect(service).toBeTruthy();
  });
});
