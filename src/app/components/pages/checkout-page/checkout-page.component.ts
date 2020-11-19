import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { count, first, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { Course } from 'src/app/interfaces/course';
import { CartItem } from '../cart-page/interfaces/cart-item';
import { CartService } from '../cart-page/services/cart.service';


import { get } from 'scriptjs'; 
import { OrdersService } from '../my-dashboard-page/orders-page/services/orders.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formValid: boolean;
  products: CartItem[];
  countItemsCart: number;
  subscription: Subscription[]=[];
  user: User;


  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private authServices: AuthService
  ) { }

  ngOnInit(): void {
    get("https://www.mercadopago.com.uy/integrations/v1/web-payment-checkout.js", () => {
      //library has been loaded...
    });
    // const logged = this.authServices.checkUser()
    this.authServices.currentUser.subscribe(res=> {
      // console.log(res);
      
      this.user = res
    })

    this.formValid = false;
    this.subscription.push(
      this.cartService.countItems$.subscribe(res => {
        this.countItemsCart = res
        if (this.form?.valid && this.countItemsCart >=1 ) {
          this.formValid = this.form.valid
        }else{
          this.formValid = false;
        }
      } )
    )
    
  }
  
  
  formChange(form: FormGroup){
    
    this.form = form;
    if (this.form.valid && this.countItemsCart >=1 ) {
      this.formValid = this.form.valid
    }else{
      this.formValid = false;
    }
    
    console.log(form);
    
    
  }



  onSubmitOrder(){
    

    let data = this.form.value
    let total
    this.cartService.getItems().subscribe(res=> this.products = res )
    this.cartService.getTotalAmount().subscribe(res=> total = res )
    data.products = this.products.map(v=> { 
      return {
        quantity: v.quantity, 
        course_id : v.product.id, 
        price: v.product.price, 
        currency_id: v.product.currency_id,
        user_id: this.user?.id
      } 
    })
    data.user_id = this.user?.id;
    data.total = total;
    data.currency_id = this.products[0].product.currency_id
    // data.status_id = 0;
    this.orderService.storeOrder(data).subscribe(
      res=> {
        const init_point = res.init_point;
        console.log(res.init_point)
        if(init_point){
          
          window.location.href = init_point;
        }
      }
      
    )
    console.log(data);
    
  }

  ngOnDestroy(): void {

    this.subscription.map(v=>v.unsubscribe())
  }
}
