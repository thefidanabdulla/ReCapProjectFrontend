import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1: any = {
    carId: 1,
    carName: 'xxx',
    brandName: 'Mercedes',
    unitPrice: 85000
  };
  car2: any = {
    carId: 2,
    carName: 'xxx',
    brandName: 'Audi',
    unitPrice: 85000
  };
  car3: any = {
    carId: 3,
    carName: 'xxx',
    brandName: 'Toyota',
    unitPrice: 85000
  };
  car4: any = {
    carId: 4,
    carName: 'xxx',
    brandName: 'Bmw',
    unitPrice: 85000
  };
  car5: any = {
    carId: 5,
    carName: 'xxx',
    brandName: 'Kia',
    unitPrice: 85000
  };
  cars = [
    this.car1,
    this.car2,
    this.car3,
    this.car4,
    this.car5
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
