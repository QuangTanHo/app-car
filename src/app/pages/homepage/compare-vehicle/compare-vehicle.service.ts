import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompareVehicleService {
  private apiBaseAuthUrl = 'http://localhost:8089/api/auth/v1';
  constructor(private http: HttpClient) { }

  getListBrand() {
    return this.http.get<any>(`${this.apiBaseAuthUrl}/brand/getAll`);
  }

  getListCarByBrandId(id:any) {
    const params = new HttpParams()
      .set('brandId', id);
    return this.http.get<any>(`${this.apiBaseAuthUrl}/car/get-list-by-brandId`,{params});
  }

  getDataCompareVehicle(data:any) {
    return this.http.get<any>(`${this.apiBaseAuthUrl}/car/compare-car`,data);
  }
}
