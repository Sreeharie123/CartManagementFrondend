import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService ,private cartService:CartService){}

  allProduct?:Observable<any>
  ngOnInit(): void {
    this.allProduct=this.productService.getAllProduct()
  }
  addToCart(product:any){
   this.cartService.addToCart(product)
  }

}
