import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from 'src/app/models/carDetailDto/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = 'https://localhost:44339/api/cars/getcardetails';
  constructor(private httpClient:HttpClient) { }
  getCarDetailDto():Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }
}
