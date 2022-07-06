import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';
import { RentalDetailDtoComponent } from './components/rentalDetailDto/rentalDetailDto.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorComponent } from './components/color/color.component';
import { OneCarDetailComponent } from './components/oneCarDetail/oneCarDetail.component';
import { CarImageComponent } from './components/carImage/carImage.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    CarDetailDtoComponent,
    RentalDetailDtoComponent,
    ColorComponent,
    OneCarDetailComponent,
    CarImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
