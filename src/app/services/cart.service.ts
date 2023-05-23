import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getAllCart(){
     return this.http.get<any>("https://dummyjson.com/carts/1").pipe(map((res)=>res.products))

  }

addToCart(body:any){
  return this.http.post("https://dummyjson.com/carts/add",body)
}
}
