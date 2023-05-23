import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cart, Carts} from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {

  constructor(private cartService:CartService){}

  cartProduct:any
  num:number=1

  ngOnInit(): void {
   this.cartProduct= this.cartService.getAllCart()
  }
  addQuantity(res:number ,id:number){
   this.num=res+1
    this.cartService.getUpdateQuantity(id,this.num)

  }

  lessQuantity(res:number,id:number){
    this.num=res-1
    this.cartService.getUpdateQuantity(id,this.num)

  }
}
