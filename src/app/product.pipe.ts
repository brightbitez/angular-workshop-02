import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './models/product';
@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {
  transform(products: Product[], name: string): Product[] {
    return products.filter((p) => p.name.indexOf(name) != -1) ;
  }

}
