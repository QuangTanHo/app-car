import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from '../common/angular-material.module';
import { PaginationComponent } from '../common/pagination/pagination.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    PaginationComponent
  ],
  exports: [
    FooterComponent,
    FormsModule,
    HeaderComponent
  ],
  providers: [
  ]
})
export class LayoutModule { }
