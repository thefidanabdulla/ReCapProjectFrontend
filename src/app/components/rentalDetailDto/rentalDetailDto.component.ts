import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto/rentalDetailDto';
import { RentalDetailDtoService } from 'src/app/services/rentalDetailDto/rentalDetailDto.service';

@Component({
  selector: 'app-rentalDetailDto',
  templateUrl: './rentalDetailDto.component.html',
  styleUrls: ['./rentalDetailDto.component.css']
})
export class RentalDetailDtoComponent implements OnInit {

  rentalDetailDtos:RentalDetailDto[] = [];
  dataLoaded = false;
  constructor(private rentalDetailDtoService:RentalDetailDtoService) { }

  ngOnInit(): void {
    this.getRentalDetailDto();
  }

  getRentalDetailDto(){
    this.rentalDetailDtoService.getRentalDetailDto().subscribe(response => {
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
}
