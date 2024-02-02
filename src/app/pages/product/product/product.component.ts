import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { IProduct } from '../../../core/model/product.model';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductListItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
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
