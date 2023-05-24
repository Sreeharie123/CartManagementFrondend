import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Cart, Carts} from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {

  constructor(private cartService:CartService){}

  cartProduct:any
  ngOnInit(): void {
   this.cartProduct= this.cartService.getAllCart()
   this.cartProduct.subscribe((value:Cart[])=>{
    this.cartService.cartQuantity.next(value.length)

   })
  }

  addQuantity( id:number){
    this.cartService.getUpdateQuantity(id).subscribe({
      next:(value)=>{
        console.log(value)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("Quantity is updated")
      }
    })
  }

  lessQuantity(id:number){
    this.cartService.getUpdateQuantityLess(id).subscribe({
      next:(value)=>{
        console.log(value)
      }
    })

  }
}
