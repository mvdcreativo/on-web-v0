import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartItem } from '../interfaces/cart-item';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { Course } from 'src/app/interfaces/course';

declare let fbq: Function;

// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("cartItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Array
  public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;
  public countItems$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(public snackBar: MatSnackBar) {
    this.cartItems.subscribe(
      products => {
        this.countItems$.next(products.length)
        products = products
      }
    );
  }

  // Get Products
  public getItems(): Observable<CartItem[]> {
    
    
    const itemsStream = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    this.countItems$.next(products.length)
    return <Observable<CartItem[]>>itemsStream;
  }

  // Add to cart
  public addToCart(product: Course, quantity: number){
    let message, status;
    var item: CartItem | boolean = false;
    // // If Products exist
    // let hasItem = products.find((items, index) => {
    //   if (items.product.id == product.id) {
    //     // let qty = products[index].quantity + quantity;
    //     let qty = 1;//para este proyecto quantity siempre es 1
    //     let stock = this.calculateStockCounts(products[index], quantity);
    //     if (qty != 0 && stock) {
    //       products[index]['quantity'] = qty;
    //       message = 'El producto ' + product.title + ' se agrego tu carrito';
    //       status = 'success';
    //       this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    //     }
    //     return true;
    //   }
    //   this.countItems$.next(products.length)

    // });

    // // If Products does not exist (Add New Products)
    // if (!hasItem) {
      item = { product: product, quantity: quantity };
      products=[item];
      message = 'El producto ' + product.title + ' se agrego tu carrito';
      status = 'success';
      // this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
    // }

    ///ejecuta Pixel Facebook
    this.facebookAddToCart(product, quantity);

    localStorage.setItem("cartItem", JSON.stringify(products));
    return true;

  }

  // Calculate Product stock Counts
  public calculateStockCounts(product: CartItem, quantity): CartItem | Boolean {
    let message, status;
    let qty = product.quantity + quantity;
    let stock = product.product.stock;
    if (stock < qty) {
      // this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
      this.snackBar.open('No puedes agregar, sin stock. En stock ' + stock + ' artículos.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      return false
    }
    return true
  }

  facebookAddToCart(product: Course, quantity) {

    // fbq('track', 'AddToCart', { 
    //   currency: 'UYU',
    //   content_ids: '150754082143164',
    //   content_type: 'product_group',
    // });
    // fbq('track', 'AddToCart', {
    //   content_name: product.title,
    //   content_ids: [product.id],
    //   value: product.price,
    //   currency: 'UYU',
    //   content_type: 'product',
    //   contents: [{ 'id': product.id, 'quantity': quantity }]
    //   // content_category: product.category.name,
    // });
  }



  // Removed in cart
  public removeFromCart(item: CartItem) {
    if (item === undefined) return false;
    const index = products.indexOf(item);
    products.splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(products));
    this.countItems$.next(products.length)
  }

  // Total amount
  public getTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: CartItem[]) => {
      return products.reduce((prev, curr: CartItem) => {
        return prev + curr.product.price * curr.quantity;
      }, 0);
    }));
  }

  // Update Cart Value
  public updateCartQuantity(product: Course, quantity: number): CartItem | boolean {
    return products.find((items, index) => {
      if (items.product.id == product.id) {
        let qty = products[index].quantity + quantity;
        let stock = this.calculateStockCounts(products[index], quantity);
        if (qty != 0 && stock)
          products[index]['quantity'] = qty;
        localStorage.setItem("cartItem", JSON.stringify(products));
        return true;
      }
    });
  }


}
