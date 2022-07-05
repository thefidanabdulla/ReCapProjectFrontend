import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44339/api/cars/';
  constructor(private httpClient:HttpClient) { }

  getCarDetailDto():Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + 'getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByBrandId(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + 'getcardetailbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByColorId(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + 'getcardetailbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailByColorAndByBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + 'getcardetailsbycolorandbybrand?colorId=' + colorId + '&brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
