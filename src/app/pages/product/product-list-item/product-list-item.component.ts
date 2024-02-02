import { Component, Input } from '@angular/core';
import { IProduct } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() product!: IProduct;

}
