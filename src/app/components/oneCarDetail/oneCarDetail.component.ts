import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/carDetailDto/carDetailDto.service';

@Component({
  selector: 'app-oneCarDetail',
  templateUrl: './oneCarDetail.component.html',
  styleUrls: ['./oneCarDetail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  oneCarDetailDto:CarDetailDto;
  dataLoaded =  false;
  crId:number = 2;
  constructor(
    private carDetailDtoService:CarDetailDtoService
  ) { }
  ngOnInit(): void {
  }
  getCarDetailByCarId(carId:number){
    this.carDetailDtoService.getCarDetailByCarId(carId).subscribe(response => {
      this.oneCarDetailDto = response;
      console.log(response)
      this.dataLoaded = true;
    })
  }
}
