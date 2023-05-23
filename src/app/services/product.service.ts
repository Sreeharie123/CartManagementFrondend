import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


getAllProduct(){
  return this.http.get<any>('https://dummyjson.com/products').pipe(map((res=>res.products)))
}


}
