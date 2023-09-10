import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private cart: CartService) {
  }
  isOpen = false;
  cartOpen = this.cart.isCartOpen;


  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  menuItems = [
  {
    routerLink: '#',
    name: 'Home'
  },
  {
    routerLink: '#',
    name: 'Product'
  },
  {
    routerLink: '#',
    name: 'Blog'
  },
  {
    routerLink: '#',
    name: 'About Us'
  },
  ];

  toggleCart(){
    this.cart.toggleCart();
    console.log(this.cartOpen);
  }
}
