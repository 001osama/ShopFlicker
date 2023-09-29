import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  providers: [AuthService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isOpen = false;
  loggedIn:boolean= false;

  constructor(
    private cart: CartService,
    private authService: AuthService) {
  }

  ngOnInit(){
    this.loggedIn = this.authService.IsUserLoggedIn();
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
    localStorage.clear();
    this.loggedIn = false;
  }
}
