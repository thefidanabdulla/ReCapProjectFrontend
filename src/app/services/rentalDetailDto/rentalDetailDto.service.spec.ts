import { TestBed } from '@angular/core/testing';

import { RentalDetailDtoService } from './rentalDetailDto.service';

describe('RentalDetailDtoService', () => {
  let service: RentalDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
