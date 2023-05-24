import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { Product } from '../interfaces/product';
import { Cart, Carts } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  //quantity of cart
  cartQuantity: Subject<number> = new Subject()

// get all cart
  getAllCart(){
     return this.http.get("http://localhost:8000/cart/all")
  }


//add to cart
addToCart(product:Product){

  const cart={
     productName:product.productName,
     imgUrl:product.imgUrl,
     productId:product._id,
     price:product.price,
  }
  return this.http.post("http://localhost:8000/cart/add",cart)
}


//length of the cart
getLength(){
 return this.http.get("http://localhost:8000/cart/length")
}


//updated the quantity
getUpdateQuantity(productId:number){
  const cartBody={
    productId:productId,
  }
return this.http.put(`http://localhost:8000/cart/add`,cartBody)
}

getUpdateQuantityLess(productId:number){
  const cartBody={
    productId:productId,
  }
return this.http.put(`http://localhost:8000/cart/less`,cartBody)

}

}


