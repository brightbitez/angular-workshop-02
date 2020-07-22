import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor() {
    const p1 = new Product("001", "soap", 123,"yes");
    const p2 = new Product("002", "soap", 123,"yes");
    const p3 = new Product("003", "soap", 123,"yes");
    

    this.products.push(p1, p2, p3);
  }

  ngOnInit(): void {

  }

}
