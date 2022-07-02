import { Component, OnInit } from '@angular/core';
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
  constructor(private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
    this.getCarDetailDto()
  }
  getCarDetailDto(){
    this.carDetailDtoService.getCarDetailDto().subscribe(response => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
      console.log(response)
    })
  }
}
