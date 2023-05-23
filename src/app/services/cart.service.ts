import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../interfaces/product';
import { Cart, Carts } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

// get all cart
  getAllCart(){
     return this.http.get<Carts>("http://localhost:8000/cart/all")
  }

//add to cart
addToCart(product:Product){
  return this.http.post("http://localhost:8000/cart/add",{item:product}).subscribe({
    next:(value)=>{
      console.log(value)
    },
    error:(error)=>{
      console.log(error)
    },
    complete:()=>{
      console.log("Added to cart successfully")
    }

  })
}

//length of the cart
getLength(){
 return this.http.get("http://localhost:8000/cart/length")
}

//updated the quantity
getUpdateQuantity(productId:number,quantity:number){

 return this.http.put(`http://localhost:8000/cart/quantity/${productId}`,{quantity:quantity}).subscribe({
  next:(value)=>{
    console.log(value)
  },
  error:(err)=>{
    console.log(err)
  },
  complete:()=>{
    console.log("Updated the quantity")
  }
 })

}

}


