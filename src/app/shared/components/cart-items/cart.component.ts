import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/components/pages/cart-page/services/cart.service';
import { CartItem } from '../../../components/pages/cart-page/interfaces/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  @Output()empty : EventEmitter<boolean> = new EventEmitter
  products: CartItem[];
  
  subscription: Subscription[]=[];


  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.getProductsCart()
  }

  getProductsCart(){
    this.subscription.push(
      this.cartService.getItems().subscribe(res=>this.products = res)
    )
  }
  
  remove(item){
    this.cartService.removeFromCart(item)
    
  }

  ngOnDestroy(): void {

    this.subscription.map(v=>v.unsubscribe())
  }

}
