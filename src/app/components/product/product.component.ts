import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService ,private cartService:CartService ,private route:Router){}

  allProduct?:Observable<Product[]>
  ngOnInit(): void {
    this.allProduct=this.productService.getAllProduct()
  }
  addToCart(product:Product){
    this.cartService.addToCart(product).subscribe({
      next:(value)=>{
        console.log(value)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("Added to the cart")
      }
    })
  }
}
