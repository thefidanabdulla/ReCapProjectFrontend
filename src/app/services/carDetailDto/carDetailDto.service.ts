import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44339';
  constructor(private httpClient:HttpClient) { }

  getCarDetailDto():Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + '/api/cars/getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByBrandId(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + '/api/cars/getcardetailbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByColorId(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + '/api/cars/getcardetailbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByColorAndByBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + '/api/cars/getcardetailsbycolorandbybrand?colorId=' + colorId + '&brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + '/api/cars/getcardetailbyid?id=' + carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
