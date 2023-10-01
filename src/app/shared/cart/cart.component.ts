import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  apiUrl:string = environment.apiURL;
  carts!:any[];
  isCartOpen$: Observable<boolean> | undefined;
  totalPrice!:number;

  constructor(public cartService: CartService){}
  
  ngOnInit(): void {
    this.isCartOpen$ = this.cartService.cartStatus();
    this.cartService.CartOpen$.subscribe((isOpen) => {
      if (isOpen) {
        this.getCartItems();
      }
    });
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe((res) => {
      this.carts = res.result;
    });
  }

  removeItem(id:number){
    this.cartService.removeItem(id);
    this.carts = this.carts.filter(x=> x.id != id);
  }
  
  
  closeCart(){
    this.cartService.hideCart();
  }
}
