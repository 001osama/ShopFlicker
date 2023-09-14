import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
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


  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  menuItems = [
  {
    routerLink: '/home',
    name: 'Home'
  },
  {
    routerLink: '/products',
    name: 'Products'
  },
  {
    routerLink: '/about',
    name: 'About'
  },
  {
    routerLink: '/contact',
    name: 'Contact'
  },
  ];

  showCart(){
    this.cart.showCart();
  }
}
