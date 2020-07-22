import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData: string = "";
  constructor(private service:ProductService) {}

  getAll(): void{
    this.service.getAllProduct().subscribe((products)=>{
      return (this.products = products);
    });
  }
  ngOnInit(): void {
    this.getAll();
  }

}
