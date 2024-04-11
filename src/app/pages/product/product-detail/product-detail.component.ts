import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { IProduct } from '../../../core/model/product.model';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, GalleryModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  products: IProduct[] = [];
  images!: GalleryItem[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
    // this.getProducts();
  }

  getProduct() {
    this.productService.getProduct().subscribe({
      next: (product: IProduct) => {
        this.product = product;
        if (product.images) {
          this.images = product.images.map((img) => {
            return new ImageItem({ src: img, thumb: img });

          });
        }
        console.log(product);
      },
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
        console.log(products);
      },
    });
  }
}
