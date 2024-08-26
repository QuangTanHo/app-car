import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, registerLocaleData } from '@angular/common';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import localeVi from '@angular/common/locales/vi';
import { PopupCreateAdviceVehiclesComponent } from './pages/vehicles/popup-create-advice-vehicles/popup-create-advice-vehicles.component';
import { AngularMaterialModule } from './common/angular-material.module';
import { VehicleDetailComponent } from './pages/vehicles/vehicle-detail/vehicle-detail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
registerLocaleData(localeVi, 'vi-VN');
@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    PopupCreateAdviceVehiclesComponent,
    VehicleDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    CKEditorModule
  ],
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule
    ),
    { provide: LOCALE_ID, useValue: 'vi-VN' }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class AppModule { }
