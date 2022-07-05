import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl = 'https://localhost:44339/api/rentals/getrentaldetails';
  constructor(private httpClient:HttpClient) { }

  getRentalDetailDto():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl);
  }
}
