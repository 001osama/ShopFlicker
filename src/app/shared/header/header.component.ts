import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  isOpen = false;
  loggedIn!:Observable<boolean>;

  constructor(
    private cart: CartService,
    private authService: AuthService) {
  }

  ngOnInit(){
    this.loggedIn = this.authService.userStatus$();
    this.loggedIn.subscribe();
  }
  

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
    }
  ];

  showCart(){
    this.cart.showCart();
  }

  logOut(){
    this.authService.logOut();

  }
}
