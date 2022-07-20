import { Component } from '@angular/core';
import { Products } from './products';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceDemo';
  products: Products[]=[];
  productService: any;
  constructor(){
    this.productService=new ProductService();
  }
  getProducts(){
    let a:string ="typeScript";
    this.products=this.productService.getProducts();
    console.log(a);
  }
}
