import { TestBed } from '@angular/core/testing';

import { ParkingDataService } from './parking-data.service';

describe('ParkingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingDataService = TestBed.get(ParkingDataService);
    expect(service).toBeTruthy();
  });
});
