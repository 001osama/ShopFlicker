import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{
  constructor(private cart: CartService){}
  
  isCartOpen: boolean = this.cart.isCartOpen; 

  toggleCart(){
    this.cart.toggleCart();
  }
  
}
