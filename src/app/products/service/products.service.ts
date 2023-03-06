import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import products from '../../mocks/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<any> {
    return of(products.data);
  }
}
