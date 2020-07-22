import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData: string = "";
  constructor( private router: Router,private service:ProductService) {}
  
  getAll(): void{
    this.service.getAllProduct().subscribe((products)=>{
      return (this.products = products);
    });
    console.log(this.products);
  }
  ngOnInit(): void {
    this.getAll();
  }
  onSelect(product){
    this.router.navigate(['/list/product', product.code]);
  }

}
