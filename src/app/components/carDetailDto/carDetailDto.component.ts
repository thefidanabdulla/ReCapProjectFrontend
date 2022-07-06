import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/carDetailDto/carDetailDto.service';

@Component({
  selector: 'app-CarDetailDto',
  templateUrl: './carDetailDto.component.html',
  styleUrls: ['./carDetailDto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailDtos:CarDetailDto[] = [];
  dataLoaded =  false;
  constructor(
    private carDetailDtoService:CarDetailDtoService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarDetailByColorAndByBrand(params["colorId"],params["brandId"])
      }
      
      else if (params["brandId"]) {
        this.getCarDetailByBrandId(params["brandId"])
      }
      
      else if(params["colorId"]) {
        this.getCarDetailByColorId(params["colorId"])
      }
      else {
        this.getCarDetailDto();
      }
    })
  }
  getCarDetailDto(){
    this.carDetailDtoService.getCarDetailDto().subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetailByColorId(colorId:number){
    this.carDetailDtoService.getCarDetailByColorId(colorId).subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetailByBrandId(brandId:number){
    this.carDetailDtoService.getCarDetailByBrandId(brandId).subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetailByColorAndByBrand(colorId:number,  brandId:number){
    this.carDetailDtoService.getCarDetailByColorAndByBrand(colorId, brandId).subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }
}
