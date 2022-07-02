import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailDtoComponent } from './rentalDetailDto.component';

describe('RentalDetailDtoComponent', () => {
  let component: RentalDetailDtoComponent;
  let fixture: ComponentFixture<RentalDetailDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalDetailDtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalDetailDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
