import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from 'src/app/models/rentalDetailDto/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {

  apiUrl = 'https://localhost:44339/api/rentals/getrentaldetails';
  constructor(private httpClient:HttpClient) { }

  getRentalDetailDto():Observable<RentalDetailDtoResponseModel>{
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
  }
}
