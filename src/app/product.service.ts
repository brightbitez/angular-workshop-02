import { Injectable } from '@angular/core';
import { Product} from './models/product';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient){
  }
  getAllProduct(): Observable<Product[]> {
    const p1 = new Product("001", "soap", 20,"yes",2);
    const p2 = new Product("002", "shampoo", 50,"yes",3);
    const p3 = new Product("003", "toothpaste", 30,"yes",4);
    const products: Product[] = [];
    products.push(p1, p2, p3);
    return of(products);
  }
  getProductById(id: string): Product { 
    const p1 = new Product("001", "soap", 20,"yes",2);
    const p2 = new Product("002", "shampoo", 50,"yes",3);
    const p3 = new Product("003", "toothpaste", 30,"yes",4);
    if(id =="001"){return p1;}
    else if(id=="002"){return p2;}
    
    return p3;

  }
 
}
