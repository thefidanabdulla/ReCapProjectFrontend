import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto/rentalDetailDto';

@Component({
  selector: 'app-rentalDetailDto',
  templateUrl: './rentalDetailDto.component.html',
  styleUrls: ['./rentalDetailDto.component.css']
})
export class RentalDetailDtoComponent implements OnInit {

  rentalDetailDtos:RentalDetailDto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
