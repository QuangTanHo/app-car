import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/service/brand.service';
import { ShowroomService } from 'src/app/core/service/showroom.service';
import { VersionService } from 'src/app/core/service/version.service';

@Component({
  selector: 'app-homepage-main',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.scss']
})
export class HomepageMainComponent implements OnInit {
 selectVersion: any ='';
   pageShowRoom = 1;
  isLastPageShowRoom = false;
  public showRoom: Array<any> = [];
  public listCarMonth: Array<any> = [];
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
    private versionService : VersionService,
    private showRoomService: ShowroomService
  ) { }

  ngOnInit() {
    this.getAllBrand();
    this.getVersionByBrandId('');
    this.getShowRoomByOutstanding();
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
 getShowRoomByOutstanding() {
  if (this.isLastPageShowRoom) return;

  this.showRoomService.getShowRoomByOutstanding(this.pageShowRoom).subscribe({
    next: (response:any) => {
      this.showRoom= this.showRoom.concat(response?.result_data.data);
      debugger
      this.isLastPageShowRoom = response?.result_data.last;
      this.pageShowRoom++;
    },
    complete: () => {
    },
    error: (error: any) => {
      console.error('Error fetching Brand:', error);
    }
  });

 }

}
