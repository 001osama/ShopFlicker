import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  isCartOpen$: Observable<boolean> | undefined;

  constructor(private cart: CartService){}
  
  ngOnInit(): void {
    this.isCartOpen$ = this.cart.cartStatus()
  }
  
  closeCart(){
    this.cart.hideCart();
  }
}
