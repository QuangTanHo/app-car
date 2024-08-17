import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/common/constant/Constant';
import { BrandService } from 'src/app/core/service/brand.service';
import { ShowroomService } from 'src/app/core/service/showroom.service';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.scss']
})
export class ShowRoomComponent implements OnInit {
  pageSize =1
  totalRecords=1
  public showRoom: Array<any>  = 
  [
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' }
    //   ]
    // },
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' }
    //   ]
    // },
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' }
    //   ]
    // },
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' }
    //   ]
    // },
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' }
    //   ]
    // },
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'https://hatinhxe.com/images/cars/thumbs/hyundai-creta-204-0.jpg', hotline:'0987654321' }
    //   ]
    // },
    // {
    // name:'Showroom Toyota', data: [
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'', hotline:'' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'', hotline:'' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'', hotline:'' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'', hotline:'' },
    //     {nameDetail: 'Huyndai Sơn trà', address: '180 Trần Văn Trứ , Sơn Trà, Đà Nẵng', image:'', hotline:'' }
    //   ]
    // }
  ]
  public listShowRoomChild : Array<any> = [];
  public showRoomActive: number = 0;
  public ObjectSearch={
    brandId :'',
    page:1
  }
  constructor(private brandService : BrandService,
    private showroomService:ShowroomService
  ) { }

  ngOnInit() {
     this.getAllBrand();
    this.getShowRoomByBrandId();
    
  }

  public disPlayShowRoomChild(brandId :any){
    // this.listShowRoomChild  = this.showRoom[index]?.data;
    this.showRoomActive = brandId;
    this.ObjectSearch.brandId = brandId;
    this.ObjectSearch.page = 1;
    this.getShowRoomByBrandId();
  }

  getAllBrand(){
    this.brandService.getAllBrand().subscribe({
      next: (response:any) => {
        this.showRoom = response.result_data;
      },
      complete: () => {
      },
      error: (error: any) => {
        console.error('Error fetching Brand:', error);
      }
    });
  }
  getShowRoomByBrandId(){
      this.showroomService.getShowRoomByBrandId(this.ObjectSearch).subscribe({
        next: (response:any) => {
          this.listShowRoomChild = response.result_data.data;
          this.totalRecords = response.result_data.total_records;
          this.pageSize =Constants.SIZE_SHOWROOM;
        },
        complete: () => {
        },
        error: (error: any) => {
          console.error('Error fetching Brand:', error);
        } 
      });
}
  onPageChanged(e : any){
    this.ObjectSearch.page =e;
    this.getShowRoomByBrandId();
}

}
