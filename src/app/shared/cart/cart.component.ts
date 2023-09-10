import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{
  @Input() isCartOpen: boolean = false; 


  toggleCart(){
    this.isCartOpen = !this.isCartOpen;
    console.log(this.isCartOpen);
  }
  
}
