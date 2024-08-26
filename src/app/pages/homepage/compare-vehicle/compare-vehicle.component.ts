import { Component, OnInit } from '@angular/core';
import { CompareVehicleService } from './compare-vehicle.service';

@Component({
  selector: 'app-compare-vehicle',
  templateUrl: './compare-vehicle.component.html',
  styleUrls: ['./compare-vehicle.component.scss']
})
export class CompareVehicleComponent implements OnInit {

  listBrandCar1: any = [];
  listCarByBrand1: any = [];

  listBrandCar2: any = [];
  listCarByBrand2: any = [];

  dataSearch = {
    brandId1: null,
    carModelId1: null,
    brandId2: null,
    carModelId2: null
  }


  dataCompare:any;
  constructor(
    private compareVehicleService: CompareVehicleService
  ) { }

  ngOnInit() {
    this.getListBrand();
  }

  getListBrand() {
    this.compareVehicleService.getListBrand().subscribe((res: any) => {
      if (res.result_data) {
        this.listBrandCar1 = JSON.parse(JSON.stringify(res.result_data));
        this.listBrandCar2 = JSON.parse(JSON.stringify(res.result_data));
      }
    })
  }
  onChangeBrand1(event: Event) {
    if (this.dataSearch.brandId1 && this.dataSearch.brandId1 !== 'null') {
      this.getListCarByBrandId1();
    } else {
      this.listCarByBrand1 = [];
    }
  }

  getListCarByBrandId1() {
    this.compareVehicleService.getListCarByBrandId(this.dataSearch.brandId1).subscribe((res: any) => {
      if (res.result_data) {
        this.listCarByBrand1 = res.result_data;
      }
    })
  }

  onChangeBrand2(event: Event) {
    if (this.dataSearch.brandId2 && this.dataSearch.brandId2 !== 'null') {
      this.getListCarByBrandId2();
    } else {
      this.listCarByBrand2 = [];
    }
  }

  getListCarByBrandId2() {
    this.compareVehicleService.getListCarByBrandId(this.dataSearch.brandId2).subscribe((res: any) => {
      if (res.result_data) {
        this.listCarByBrand2 = res.result_data;
      }
    })
  }

  getDataCompareVehicle() {

    const allValuesNotNull = Object.values(this.dataSearch).every(value => value !== null);
    if (!allValuesNotNull) {
      return;
    }
    this.compareVehicleService.getDataCompareVehicle(this.dataSearch).subscribe((res: any) => {
      if (res.result_data) {
        this.dataCompare = res.result_data;
      }
    })
  }
}
