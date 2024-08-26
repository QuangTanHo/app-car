import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  slickCarouselConfig :any;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent | any;
  carDetail = {
    "images": [
        {
            "carImageId": 1,
            "carModelId": 1,
            "urlImage": "https://cdn.oto360.net/images/car/ford/ranger/trang.webp",
            "type": "clone"
        },
        {
            "carImageId": 2,
            "carModelId": 1,
            "urlImage": "https://cdn.oto360.net/images/car/ford/ranger/bac.webp",
            "type": "clone"
        },
        {
            "carImageId": 3,
            "carModelId": 1,
            "urlImage": "https://cdn.oto360.net/images/car/ford/ranger/xam.webp",
            "type": "clone"
        },
        {
            "carImageId": 4,
            "carModelId": 1,
            "urlImage": "https://cdn.oto360.net/images/car/ford/ranger/den.webp",
            "type": "clone"
        },
        {
            "carImageId": 5,
            "carModelId": 1,
            "urlImage": "https://cdn.oto360.net/images/car/ford/ranger/vang.webp",
            "type": "clone"
        },
        {
            "carImageId": 6,
            "carModelId": 1,
            "urlImage": "https://cdn.oto360.net/images/car/ford/ranger/do.webp",
            "type": "clone"
        }
    ],
    "versions": [
        {
            "versionId": 1,
            "carModelId": 1,
            "versionName": "Ranger XL 4x4 MT",
            "type": "clone",
            "publicPrice": 0.00,
            "onRoadPriceHCM": 759000000.00,
            "onRoadPriceHN": 773000000.00,
            "onRoadPriceProvince": 740000000.00,
            "installmentPayment": 669000000.00
        },
        {
            "versionId": 2,
            "carModelId": 1,
            "versionName": "Ranger XLS 4x2 AT",
            "type": "clone",
            "publicPrice": 0.00,
            "onRoadPriceHCM": 801000000.00,
            "onRoadPriceHN": 815000000.00,
            "onRoadPriceProvince": 782000000.00,
            "installmentPayment": 707000000.00
        },
        {
            "versionId": 3,
            "carModelId": 1,
            "versionName": "Ranger XLS 4x4 AT",
            "type": "clone",
            "publicPrice": 0.00,
            "onRoadPriceHCM": 877000000.00,
            "onRoadPriceHN": 892000000.00,
            "onRoadPriceProvince": 858000000.00,
            "installmentPayment": 776000000.00
        },
        {
            "versionId": 4,
            "carModelId": 1,
            "versionName": "Ranger Sport 4x4 AT",
            "type": "clone",
            "publicPrice": 0.00,
            "onRoadPriceHCM": 974000000.00,
            "onRoadPriceHN": 991000000.00,
            "onRoadPriceProvince": 955000000.00,
            "installmentPayment": 864000000.00
        },
        {
            "versionId": 5,
            "carModelId": 1,
            "versionName": "Ranger Wildtrak AT 4x4",
            "type": "clone",
            "publicPrice": 0.00,
            "onRoadPriceHCM": 1100000000.00,
            "onRoadPriceHN": 1120000000.00,
            "onRoadPriceProvince": 1081000000.00,
            "installmentPayment": 979000000.00
        },
        {
            "versionId": 6,
            "carModelId": 1,
            "versionName": "Ranger Stormtrak AT 4x4",
            "type": "clone",
            "publicPrice": 0.00,
            "onRoadPriceHCM": 1166000000.00,
            "onRoadPriceHN": 1187000000.00,
            "onRoadPriceProvince": 1147000000.00,
            "installmentPayment": 1039000000.00
        }
    ],
    "carDetail": {
        "carDetailId": 1,
        "carModelId": 1,
        "carDetailName": "Ford Ranger",
        "brandname": "Ford",
        "typeOfvehicle": "Xe bán tải ❭ Xe bán tải Ford",
        "segment": "Xe bán tải cỡ trung",
        "origin": "Lắp ráp",
        "priceRange": "Từ 669 đến 1,039 triệu",
        "seat": "5",
        "groundClearance": "235",
        "wheelsAndTires": "255/65R18",
        "engine": "Bi Turbo Diesel 2.0L i4 TDCi",
        "power": "210/3,750",
        "torque": "500/1,750 - 2,000",
        "transmission": "Số tự động 10 cấp/ 10AT",
        "driveSystem": "Hai cầu chủ động / 4x4",
        "suspensionSystem": "Hệ thống treo độc lập, tay đòn kép, lò xo trọ, thanh cân bằng và ống giảm chấn/ Loại nhíp với ống giảm chấn",
        "rearBrake": "Đĩa/Đĩa",
        "brakeTechnology": "ABS, EBD, ESP",
        "type": "clone",
        "hww": "3,270"
    }
}
  constructor(

  ) {
    this.slickCarouselConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000
    };
   }

  ngOnInit() {
  }

  goToSlide(index: number) {
    this.slickModal.slickGoTo(index);
  }
}
