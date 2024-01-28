import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  

  constructor() { }

  getBanners() {
    const banners = [
      {
        img: '/assets/img/banner01.jpg',
        title: 'Bags sale',
        subTitle: 'Up to 50% Discount',
      },
      {
        img: '/assets/img/banner02.jpg',
        title: 'Bags sale',
        subTitle: 'Up to 50% Discount',
      },
      {
        img: '/assets/img/banner03.jpg',
        title: 'Bags sale',
        subTitle: 'Up to 50% Discount',
      },
      {
        img: '/assets/img/banner01.jpg',
        title: 'Bags sale',
        subTitle: 'Up to 50% Discount',
      },
    ];

    return of(banners);
  }

}
