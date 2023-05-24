import { AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  number?:Observable<number>
  constructor(private cartService:CartService){
  }
   ngOnInit(): void {
    this.number=this.cartService.cartQuantity
  }

}
