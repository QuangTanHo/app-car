import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompareVehicleService {
  constructor(private http: HttpClient) { }

  getListBrand() {
    return this.http.get<any>(`${environment.apiBaseUrl}un-auth/brand/getAll`);
  }

  getListCarByBrandId(id:any) {
    const params = new HttpParams()
      .set('brandId', id);
    return this.http.get<any>(`${environment.apiBaseUrl}un-auth/car/get-list-by-brandId`,{params});
  }

  getDataCompareVehicle(data:any) {
    return this.http.post<any>(`${environment.apiBaseUrl}un-auth/car/compare-car`,data);
  }
}
