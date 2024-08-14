import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/constant/Constant';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

constructor( private httpClient :HttpClient) { }

getShowRoomByBrandId(obj:any) {
  let params = new HttpParams();
  if (obj.brandId !== null) {
    params = params.set('brandId', obj.brandId.toString());
  }
  params = params.set('page',obj.page);
  params = params.set('size',Constants.SIZE_SHOWROOM);

  return this.httpClient.get<any>(`${environment.apiBaseUrl}auth/v1/showroom/get-by-brandId`, { params });
}
}
