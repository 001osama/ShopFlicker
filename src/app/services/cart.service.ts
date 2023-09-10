import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public isCartOpen = false;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    console.log(this.isCartOpen);
  }

  constructor() { }
}
