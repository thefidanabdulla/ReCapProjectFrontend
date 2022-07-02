import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';

@Component({
  selector: 'app-CarDetailDto',
  templateUrl: './carDetailDto.component.html',
  styleUrls: ['./carDetailDto.component.css']
})
export class CarDetailDtoComponent implements OnInit {
  carDetailDtos:CarDetailDto[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
