import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private CartOpen$: BehaviorSubject<boolean>;
  
  constructor() {
    this.CartOpen$ = new BehaviorSubject(false);
    }

  cartStatus(){
    return this.CartOpen$.asObservable();
  }

  showCart() {
    this.CartOpen$.next(true);
  }

  hideCart(){
    this.CartOpen$.next(false)
  }


}
