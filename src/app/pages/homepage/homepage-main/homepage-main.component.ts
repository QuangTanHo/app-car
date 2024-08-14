import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/service/brand.service';
import { VersionService } from 'src/app/core/service/version.service';

@Component({
  selector: 'app-homepage-main',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.scss']
})
export class HomepageMainComponent implements OnInit {
   selectVersion: any ='';
  public showRoom: Array<any> = [
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    }
  ];
  public listCarMonth: Array<any> = [
    // {
    //   linkAutomaker: 'test',
    //   nameMaker: 'namema',
    //   nameVehicles: 'nameXe',
    //   version: 'sadadsasdsa',
    //   vehicleSegment: 'adadadsada',
    //   listedPrice: 'adhjahdjsa'
    // },
    // {
    //   linkAutomaker: 'test',
    //   nameMaker: 'namema',
    //   nameVehicles: 'nameXe',
    //   version: 'sadadsasdsa',
    //   vehicleSegment: 'adadadsada',
    //   listedPrice: 'adhjahdjsa'
    // },
    // {
    //   linkAutomaker: 'test',
    //   nameMaker: 'namema',
    //   nameVehicles: 'nameXe',
    //   version: 'sadadsasdsa',
    //   vehicleSegment: 'adadadsada',
    //   listedPrice: 'adhjahdjsa'
    // },
    // {
    //   linkAutomaker: 'test',
    //   nameMaker: 'namema',
    //   nameVehicles: 'nameXe',
    //   version: 'sadadsasdsa',
    //   vehicleSegment: 'adadadsada',
    //   listedPrice: 'adhjahdjsa'
    // }
  ];
  public listTrademark: Array<any> = [
  ]
  public posts: Array<any> =
    [
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      },
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      },
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      },
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      }

    ]
  constructor(
    private brandService : BrandService,
    private versionService : VersionService
  ) { }

  ngOnInit() {
    this.getAllBrand();
    this.getVersionByBrandId('');
  }

  getAllBrand(){
      this.brandService.getAllBrand().subscribe({
        next: (response:any) => {
          this.listTrademark = response.result_data;
        },
        complete: () => {
        },
        error: (error: any) => {
          console.error('Error fetching Brand:', error);
        }
      });
    
  }

  getVersionByBrandId(value:any){
    this.versionService.getAllVersionByBrandId(value).subscribe({
      next: (response:any) => {
        this.listCarMonth = response.result_data;
      },
      complete: () => {
      },
      error: (error: any) => {
        console.error('Error fetching Brand:', error);
      }
    });
}
 OnChangeVersion(e:any){
  this.getVersionByBrandId(e)
 }
}
