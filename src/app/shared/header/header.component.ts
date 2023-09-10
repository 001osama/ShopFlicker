import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;
  cartOpen = false;


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
    console.log(this.cartOpen);
  }
}
