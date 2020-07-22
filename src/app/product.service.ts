import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProduct(): Product[] {
    const products: Product[] = [];
    const p1 = new Product("001", "soap", 123,"yes");
    const p2 = new Product("002", "soap", 123,"yes");
    const p3 = new Product("003", "soap", 123,"yes");
    products.push(p1, p2, p3);
    return products;
  }
  
}
