import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { CartItem } from '../cart-page/interfaces/cart-item';
import { CartService } from '../cart-page/services/cart.service';


// import { get } from 'scriptjs';
import { OrdersService } from '../my-dashboard-page/orders-page/services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCuposComponent } from './dialog-cupos/dialog-cupos.component';
import { UsersService } from 'src/app/auth/users.service';
import { DecimalPipe } from '@angular/common';
import { NumberFormatPipe } from 'src/app/shared/pipes/number-format.pipe';
declare let fbq: Function;//facebook pixel


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  providers: [ NumberFormatPipe ]
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formValid: boolean;
  products: CartItem[];
  countItemsCart: number;
  subscription: Subscription[] = [];
  user: Observable<User>;
  user_id: number;


  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private authServices: AuthService,
    private userService: UsersService,
    public dialog: MatDialog,
    private decimalPipe: DecimalPipe,
    private formatPipe: NumberFormatPipe

  ) {

  }

  ngOnInit(): void {
    // get("https://www.mercadopago.com.uy/integrations/v1/web-payment-checkout.js", () => {
    //   //library has been loaded...
    // });
    // const logged = this.authServices.checkUser()
    //facebook
    fbq('track', 'AddToCart');
    ///////////
    this.authServices.currentUser.subscribe(res => {
      if (res && res.id) {
        this.user_id = res?.id
        this.user = this.userService.getUser(res.id).pipe(map(v => v.data))

      }
    })



    this.formValid = false;
    this.subscription.push(
      this.cartService.countItems$.subscribe(res => {
        this.countItemsCart = res
        if (this.form?.valid && this.countItemsCart >= 1) {
          this.formValid = true
        } else {
          this.formValid = false;
        }
      })
    )
    console.log(this.form?.valid);

  }


  formChange(form: FormGroup) {

    this.form = form;
    if (this.form.valid && this.countItemsCart >= 1) {
      this.formValid = this.form.valid
    } else {
      this.formValid = false;
    }

    console.log(form);


  }


  onSubmitOrder() {


    let data = this.form.value
    let total
    this.cartService.getItems().subscribe(res => this.products = res)
    this.cartService.getTotalAmount().subscribe(res => total = res)
    data.products = this.products.map(v => {
        let calc_price = v.product.price - v.product.price * v.product.discount_uno / 100
        let round = Math.round(calc_price);
        console.log(round);
        // let roundRemoveComa = this.formatPipe.transform( parseFloat(round))
        // console.log(roundRemoveComa);
      return {
        quantity: v.quantity,
        course_id: v.product.id,
        price: round,
        currency_id: v.product.currency_id,
        user_id: this.user_id
      }
    })
    data.user_id = this.user_id;
    data.total = total;
    data.currency_id = this.products[0].product.currency_id
    // data.status_id = 0;
    this.subscription.push(
      this.orderService.storeOrder(data).subscribe(
        res => {
          const init_point = res.init_point;
          const newCourse = res.new_course
          if (newCourse) {
            this.openDialogCupos(newCourse)
          }
          if (init_point) {
            window.location.href = init_point;
          }

          fbq('track', 'AddPaymentInfo');
          fbq('track', 'InitiateCheckout');

        },
        // err => this.openDialogCupos()


      )
    )


  }

  ngOnDestroy(): void {

    this.subscription.map(v => v.unsubscribe())
  }


  openDialogCupos(course): void {
    const dialogRef = this.dialog.open(DialogCuposComponent, {
      maxWidth: '100%',
      width: '550px',
      data: course
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }
}
