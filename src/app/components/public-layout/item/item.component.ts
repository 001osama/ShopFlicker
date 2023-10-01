import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { AddCartItem } from 'src/app/models/addCartItem';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  constructor(private _router:Router) {
  }

  @Output() cartItem = new EventEmitter<AddCartItem>();
  @Input() product!:Product; 
  apiUrl:string = environment.apiURL;
  quantity:number=1; 
  
  increaseQuantity(){
    this.quantity = this.quantity + 1 ;
  }

  decreaseQuantity(){
    this.quantity = this.quantity - 1;
  }

  addToCart(){
    const userId = localStorage.getItem("UserId");
    if(userId == null){
      this._router.navigate(['auth/login'])
      return
    }
    const cartItem: AddCartItem ={
      productId: this.product.id,
      quantity: this.quantity
    }
    this.cartItem.emit(cartItem);
    this.quantity = 1;
  }
}
