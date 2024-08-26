import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

constructor(private httpClient :HttpClient) { }

getAllVersionByBrandId(brandId:any) {
  let params = new HttpParams();
  if (brandId !== null) {
    params = params.set('brandId', brandId.toString());
  }

  return this.httpClient.get<any>(`${environment.apiBaseUrl}un-auth/version/get-by-brandId`, { params });
}

}
