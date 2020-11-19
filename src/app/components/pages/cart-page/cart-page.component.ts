import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './interfaces/cart-item';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  
  formValid: boolean;
  products: Observable<CartItem[]>;


  constructor(
    private cartServices: CartService
  ) { }

  ngOnInit(): void {
    this.formValid = false;
  }




  onSubmitOrder(){
    // console.log(this.form);
    
  }
}
