import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupCreateAdviceVehiclesComponent } from './popup-create-advice-vehicles/popup-create-advice-vehicles.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  listDataCar = [
    {
      "carModelId": 57,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi Q2",
      "href": "/xe-audi/q2.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/q2_2408.webp",
      "type": "clone",
      "price": 1590000000.00
    },
    {
      "carModelId": 58,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi A4",
      "href": "/xe-audi/a4.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/a4_xanh_2408.webp",
      "type": "clone",
      "price": 1790000000.00
    },
    {
      "carModelId": 59,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi Q3",
      "href": "/xe-audi/q3.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/q3_trang_2408.webp",
      "type": "clone",
      "price": 1890000000.00
    },
    {
      "carModelId": 60,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi Q3 Sportback",
      "href": "/xe-audi/q3-sportback.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/q3_sportback_img_2408.webp",
      "type": "clone",
      "price": 2060000000.00
    },
    {
      "carModelId": 61,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi A6",
      "href": "/xe-audi/a6.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/a6_trang_2408.webp",
      "type": "clone",
      "price": 2250000000.00
    },
    {
      "carModelId": 62,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi Q5",
      "href": "/xe-audi/q5.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/q5_xanhla_2408.webp",
      "type": "clone",
      "price": 2390000000.00
    },
    {
      "carModelId": 63,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi Q5 Sportback",
      "href": "/xe-audi/q5-sportback.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/q5-sportback-2408.webp",
      "type": "clone",
      "price": 2490000000.00
    },
    {
      "carModelId": 64,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi e-Tron",
      "href": "/xe-audi/e-tron.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/e_tron_2408.webp",
      "type": "clone",
      "price": 2970000000.00
    },
    {
      "carModelId": 65,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi A7",
      "href": "/xe-audi/a7.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/a7_trang_2408.webp",
      "type": "clone",
      "price": 2990000000.00
    },
    {
      "carModelId": 66,
      "brandId": 13,
      "carImageId": null,
      "carName": "Audi Q7",
      "href": "/xe-audi/q7.html",
      "imageUrl": "https://cdn.oto360.net/images/car/audi/q7_2024_img.webp",
      "type": "clone",
      "price": 3590000000.00
    }
  ];

  trademarkName: string = 'Audi';



  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  showDialogCreateAdvise() {
    const dialog = this.dialog.open(PopupCreateAdviceVehiclesComponent, {
      width: '50%',
      id: 'dialog-create-advice',
      disableClose: true,
      panelClass: ['popup-create-advice'],
    });
    dialog.afterClosed().subscribe((res) => {
      if (res == 'OK') {

      }
      // this.refreshData();
    });
  }
  routerCarDetail(href: string) {
    const firstSlashIndex = href.indexOf('/') + 1;
    const secondSlashIndex = href.indexOf('/', firstSlashIndex + 1);

    const result = href.substring(firstSlashIndex, secondSlashIndex);

    console.log(result);
    const currentUrl = this.router.url;
    const newUrl = `${currentUrl}/${result}`;
    this.router.navigate([newUrl]);
  }
}
