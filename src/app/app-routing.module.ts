import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehicleDetailComponent } from './pages/vehicles/vehicle-detail/vehicle-detail.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: ':info_id',
    component: VehiclesComponent,
  },
  {
    path: ':info_id/:car_detail',
    component: VehicleDetailComponent,
  },
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
