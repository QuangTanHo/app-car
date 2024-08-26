import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './Components';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from "../../common/pagination/pagination.component";
import { AngularMaterialModule } from 'src/app/common/angular-material.module';

@NgModule({
  declarations: [
    HomepageComponent,
    ...Components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomepageRoutingModule,
    LayoutModule,
    PaginationComponent,
    AngularMaterialModule
]
})
export class HomepageModule { }
