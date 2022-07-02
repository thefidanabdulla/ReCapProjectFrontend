import { TestBed } from '@angular/core/testing';

import { CarDetailDtoService } from './carDetailDto.service';

describe('CarDetailDtoService', () => {
  let service: CarDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
