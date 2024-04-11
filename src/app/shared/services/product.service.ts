import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../core/model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getDayOfDelays(): Observable<IProduct[]>  {
    return this.http.get<IProduct[]>('assets/db/new-collection.json');
  }
  
  getProduct(): Observable<IProduct>  {
    return this.http.get<IProduct>('assets/db/product-detail.json');
  }

  getProducts(): Observable<IProduct[]>  {
    return this.http.get<IProduct[]>('assets/db/new-collection.json');
  }
}
