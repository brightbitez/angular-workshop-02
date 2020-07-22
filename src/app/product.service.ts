import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient){}
  getAllProduct(): Observable<Product[]> {
    const products: Product[] = [];
    const p1 = new Product("001", "soap", 123,"yes");
    const p2 = new Product("002", "soap", 123,"yes");
    const p3 = new Product("003", "soap", 123,"yes");
    products.push(p1, p2, p3);
    return of(products);
  }
}
