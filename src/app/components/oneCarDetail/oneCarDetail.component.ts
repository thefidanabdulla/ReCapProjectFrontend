import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/carDetailDto/carDetailDto.service';

@Component({
  selector: 'app-oneCarDetail',
  templateUrl: './oneCarDetail.component.html',
  styleUrls: ['./oneCarDetail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  oneCarDetailDto:CarDetailDto[] = [];
  dataLoaded =  false;
  constructor(
    private carDetailDtoService:CarDetailDtoService,
    private activatedRoute:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"])
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.carDetailDtoService.getCarDetailByCarId(carId).subscribe(response => {
      this.oneCarDetailDto = response.data;
      console.log(this.oneCarDetailDto[0])
      this.dataLoaded = true;
    })
  }
}
