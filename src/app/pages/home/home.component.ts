import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from '../../core/model/banners.model';
import { IProduct } from '../../core/model/product.model';
import { ProductService } from '../../shared/services/product.service';
import { HomeService } from './home.service';
import { ProductListItemComponent } from '../product/product-list-item/product-list-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, ProductListItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideAnimations(), NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  itemsPerSlide = 2;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  

  productOnDealOfDays: IProduct[] = [];
  banners?: Banner[];

  constructor(
    private homeService: HomeService,
    private productService: ProductService,
    config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.getDealOfDays();
    this.getBanners();
  }

  getBanners() {
    this.homeService.getBanners().subscribe({
      next: (banners: Banner[]) => {
        this.banners = banners;
      },
    });
  }

  getDealOfDays() {
    this.productService.getDayOfDelays().subscribe({
      next: (products: IProduct[]) => {
        this.productOnDealOfDays = products.splice(1,3);
        console.log(products);
      },
    });
  }
}
