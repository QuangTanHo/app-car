import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './Components';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from "../../common/pagination/pagination.component";

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
    PaginationComponent
]
})
export class HomepageModule { }
