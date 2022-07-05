import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailDtoComponent } from './components/carDetailDto/carDetailDto.component';

const routes: Routes = [
  { path:'', pathMatch:'full',  component:CarDetailDtoComponent },
  { path:'cardetails',  component:CarDetailDtoComponent },
  { path:'cardetails/brand/:brandId',  component:CarDetailDtoComponent  },
  {path:"cardetails/color/:colorId/brand/:brandId", component:CarDetailDtoComponent},
  { path:'cardetails/color/:colorId',  component:CarDetailDtoComponent  },
  { path:'cars',  component:CarComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
