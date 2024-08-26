import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DataHeader {
  parent: string;
  chilren: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public titelHeader: string = '';
  public userName: string = '';
  public iconLogomenu: string = 'logo';
  public listMenu: Array<string> = ['Bảng giá Ô tô', 'Show room', 'Thị trường Ô tô', 'Tính giá xe', 'So sánh xe'];

  items = [
    {
      label: 'Bảng giá Ô tô',
      items: [
        {
          brandId: 1,
          name: 'Ford',
          url: '/xe-ford',
          childrenCar: [
            {
              carModelId: 1,
              name: 'Ford Ranger',
              url: '/xe-ford/ranger.html',
            },
            {
              carModelId: 2,
              name: 'Ford Territory',
              url: '/xe-ford/territory.html',
            },
            {
              carModelId: 3,
              name: 'Ford Everest',
              url: '/xe-ford/everest.html',
            },
            {
              carModelId: 4,
              name: 'Ford Ranger Raptor',
              url: '/xe-ford/ranger-raptor.html',
            },
            {
              carModelId: 5,
              name: 'Ford Explorer',
              url: '/xe-ford/explorer.html',
            },
            {
              carModelId: 6,
              name: 'Ford Transit',
              url: '/xe-ford/transit.html',
            },
          ],
        },
        {
          brandId: 2,
          name: 'Chevrolet',
          url: '/xe-chevrolet',
          childrenCar: [],
        },
        {
          brandId: 3,
          name: 'Jeep',
          url: '/xe-jeep',
          childrenCar: [
            {
              carModelId: 7,
              name: 'Jeep Wrangler',
              url: '/xe-jeep/wrangler.html',
            },
            {
              carModelId: 8,
              name: 'Jeep Grand Cherokee',
              url: '/xe-jeep/grand-cherokee.html',
            },
            {
              carModelId: 9,
              name: 'Jeep Gladiator',
              url: '/xe-jeep/gladiator.html',
            },
          ],
        },
        {
          brandId: 4,
          name: 'Tesla',
          url: '/xe-tesla',
          childrenCar: [],
        },
        {
          brandId: 5,
          name: 'Dodge',
          url: '/xe-dodge',
          childrenCar: [],
        },
        {
          brandId: 6,
          name: 'Cadillac',
          url: '/xe-cadillac',
          childrenCar: [],
        },
        {
          brandId: 7,
          name: 'Ram',
          url: '/xe-ram',
          childrenCar: [
            {
              carModelId: 10,
              name: 'Ram 1500',
              url: '/xe-ram/1500.html',
            },
          ],
        },
        {
          brandId: 8,
          name: 'Chrysler',
          url: '/xe-chrysler',
          childrenCar: [],
        },
        {
          brandId: 9,
          name: 'Lincoln',
          url: '/xe-lincoln',
          childrenCar: [],
        },
        {
          brandId: 10,
          name: 'Volkswagen',
          url: '/xe-volkswagen',
          childrenCar: [
            {
              carModelId: 11,
              name: 'Volkswagen Virtus',
              url: '/xe-volkswagen/virtus.html',
            },
            {
              carModelId: 12,
              name: 'Volkswagen T-Cross',
              url: '/xe-volkswagen/t-cross.html',
            },
            {
              carModelId: 13,
              name: 'Volkswagen Passat',
              url: '/xe-volkswagen/passat.html',
            },
            {
              carModelId: 14,
              name: 'Volkswagen Tiguan',
              url: '/xe-volkswagen/tiguan.html',
            },
            {
              carModelId: 15,
              name: 'Volkswagen Viloran',
              url: '/xe-volkswagen/viloran.html',
            },
            {
              carModelId: 16,
              name: 'Volkswagen Teramont X',
              url: '/xe-volkswagen/teramont-x.html',
            },
            {
              carModelId: 17,
              name: 'Volkswagen Teramont',
              url: '/xe-volkswagen/teramont.html',
            },
            {
              carModelId: 18,
              name: 'Volkswagen Touareg',
              url: '/xe-volkswagen/touareg.html',
            },
          ],
        },
      ],
    },
    {
      label: 'Show room',
      url: 'show-room',
    },
    {
      label: 'Thị trường Ô tô',
      url: 'information',
    },
    {
      label: 'Tính giá xe',
      url: 'installment-price',
    },
    {
      label: 'So sánh xe',
      url: 'compare-vehicle',
    },
  ];

  listHeaderCar =  [
    {
      brandId: 1,
      name: 'Ford',
      url: '/xe-ford',
      childrenCar: [
        {
          carModelId: 1,
          name: 'Ford Ranger',
          url: '/xe-ford/ranger.html',
        },
        {
          carModelId: 2,
          name: 'Ford Territory',
          url: '/xe-ford/territory.html',
        },
        {
          carModelId: 3,
          name: 'Ford Everest',
          url: '/xe-ford/everest.html',
        },
        {
          carModelId: 4,
          name: 'Ford Ranger Raptor',
          url: '/xe-ford/ranger-raptor.html',
        },
        {
          carModelId: 5,
          name: 'Ford Explorer',
          url: '/xe-ford/explorer.html',
        },
        {
          carModelId: 6,
          name: 'Ford Transit',
          url: '/xe-ford/transit.html',
        },
      ],
    },
    {
      brandId: 2,
      name: 'Chevrolet',
      url: '/xe-chevrolet',
      childrenCar: [],
    },
    {
      brandId: 3,
      name: 'Jeep',
      url: '/xe-jeep',
      childrenCar: [
        {
          carModelId: 7,
          name: 'Jeep Wrangler',
          url: '/xe-jeep/wrangler.html',
        },
        {
          carModelId: 8,
          name: 'Jeep Grand Cherokee',
          url: '/xe-jeep/grand-cherokee.html',
        },
        {
          carModelId: 9,
          name: 'Jeep Gladiator',
          url: '/xe-jeep/gladiator.html',
        },
      ],
    },
    {
      brandId: 4,
      name: 'Tesla',
      url: '/xe-tesla',
      childrenCar: [],
    },
    {
      brandId: 5,
      name: 'Dodge',
      url: '/xe-dodge',
      childrenCar: [],
    },
    {
      brandId: 6,
      name: 'Cadillac',
      url: '/xe-cadillac',
      childrenCar: [],
    },
    {
      brandId: 7,
      name: 'Ram',
      url: '/xe-ram',
      childrenCar: [
        {
          carModelId: 10,
          name: 'Ram 1500',
          url: '/xe-ram/1500.html',
        },
      ],
    },
    {
      brandId: 8,
      name: 'Chrysler',
      url: '/xe-chrysler',
      childrenCar: [],
    },
    {
      brandId: 9,
      name: 'Lincoln',
      url: '/xe-lincoln',
      childrenCar: [],
    },
    {
      brandId: 10,
      name: 'Volkswagen',
      url: '/xe-volkswagen',
      childrenCar: [
        {
          carModelId: 11,
          name: 'Volkswagen Virtus',
          url: '/xe-volkswagen/virtus.html',
        },
        {
          carModelId: 12,
          name: 'Volkswagen T-Cross',
          url: '/xe-volkswagen/t-cross.html',
        },
        {
          carModelId: 13,
          name: 'Volkswagen Passat',
          url: '/xe-volkswagen/passat.html',
        },
        {
          carModelId: 14,
          name: 'Volkswagen Tiguan',
          url: '/xe-volkswagen/tiguan.html',
        },
        {
          carModelId: 15,
          name: 'Volkswagen Viloran',
          url: '/xe-volkswagen/viloran.html',
        },
        {
          carModelId: 16,
          name: 'Volkswagen Teramont X',
          url: '/xe-volkswagen/teramont-x.html',
        },
        {
          carModelId: 17,
          name: 'Volkswagen Teramont',
          url: '/xe-volkswagen/teramont.html',
        },
        {
          carModelId: 18,
          name: 'Volkswagen Touareg',
          url: '/xe-volkswagen/touareg.html',
        },
      ],
    },
  ]
  
  menuItems: any;

  ngOnInit() {
    this.menuItems = this.items.map((item) => {
      if (item.items) { 
        // Chuyển đổi cấu trúc con cho các thương hiệu ô tô
        return {
          label: item.label,
          items: item.items.map((brand) => ({
            label: brand.name,
            url: brand.url,
            items:
              brand.childrenCar.length > 0
                ? brand.childrenCar.map((car) => ({
                    label: car.name,
                    url: car.url,
                  }))
                : null,
          })),
        };
      } else {
        // Các mục menu không có mục con
        return {
          label: item.label,
          url: item.url,
        };
      }
    });
  }


  hoverIndex: number | null = null; // Lưu index của phần tử được hover

  onMouseEnter(index: number) {
    if (index === 0) {
      this.hoverIndex = index;
    }
  }

  onMouseLeave() {
    this.hoverIndex = null;
  }

  public checkLogin = false;
  public activeMenu = 99;
  public checkDisplay: boolean = true;
  public constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  public btnLogOut(): void { }
  public displayLogin() {
    this.checkLogin = !this.checkLogin;
  }
  public returnHomePage() {
    this.activeMenuIdx(99);
    this.router.navigate(['home']);
  }

  public activeMenuIdx(idx: number): void {
    if (this.activeMenu === idx) {
      this.activeMenu = 99;
    } else {
      this.activeMenu = idx;
    }
    this.checkLogin = false;
    this.checkDisplay = false;
    switch (idx) {
      case 0:
        this.router.navigate(['vehicle-price']);
        break;
      case 1:
        this.router.navigate(['show-room']);
        break;
      case 2:
        this.router.navigate(['information']);
        break;
      case 3:
        this.router.navigate(['installment-price']);
        break;
      case 4:
        this.router.navigate(['compare-vehicle']);
        break;
      default:
        break;
    }
  }

}
