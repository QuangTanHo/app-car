import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

constructor( private httpClient :HttpClient ) { }

public getAllBrand() {
   return this.httpClient.get<any>(environment.apiBaseUrl.concat('un-auth/brand/getAll'));
}

}
