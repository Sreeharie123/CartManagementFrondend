import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {

  constructor(private cartService:CartService){}

  cartProduct?:Observable<any>

  ngOnInit(): void {

   this.cartProduct= this.cartService.getAllCart()
  }

}
