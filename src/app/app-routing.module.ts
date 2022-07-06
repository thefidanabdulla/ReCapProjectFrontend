import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';
import { OneCarDetailComponent } from './components/oneCarDetail/oneCarDetail.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  component:CarDetailDtoComponent },
  { path:'cardetails',  component:CarDetailDtoComponent },
  { path:'cardetails/brand/:brandId',  component:CarDetailDtoComponent  },
  { path:'cardetails/color/:colorId',  component:CarDetailDtoComponent  },
  { path:'cardetails/carId/:carId',  component:OneCarDetailComponent  },
  { path:'cars',  component:CarComponent  },
  { path:'cars/:carId',  component:CarDetailDtoComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
