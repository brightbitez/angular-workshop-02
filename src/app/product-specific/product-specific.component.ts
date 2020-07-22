import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-specific',
  templateUrl: './product-specific.component.html',
  styleUrls: ['./product-specific.component.css']
})
export class ProductSpecificComponent implements OnInit {
  public productCode: string;
  public product: Product;
  constructor(private route: ActivatedRoute,private service:ProductService) { }
  ngOnInit() {
    let code = this.route.snapshot.paramMap.get("id");
    this.productCode = code;
    this.product = this.service.getProductById(this.productCode);
  }


}
