import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CartService extends BaseService{
  
  url:string = "api/ShoppingCart";
  public CartOpen$: BehaviorSubject<boolean>;
  cartItems!: Observable<any>;

  constructor(
    private readonly authService: AuthService,
    _httpClient: HttpClient,
    private _router: Router) 
    {
      super(_httpClient);
      this.CartOpen$ = new BehaviorSubject(false);
    }

  getCartItems(){
    return this.get(this.url)
  }

  addToCart(data:any){
    return this.post(this.url,data);
  }

  removeItem(id:number){
    return this.delete(`${this.url}/${id}`,id).subscribe();
  }

  cartStatus(){
    return this.CartOpen$.asObservable();
  }

  showCart() {
    if(this.authService.IsUserLoggedIn())
    {
      this.CartOpen$.next(true);
    }
    else
    {
      this._router.navigate(['auth/login']);
    }
  }

  hideCart(){
    this.CartOpen$.next(false);
  }

  checkout():Observable<any>{
    return this.post("api/Orders",null)
  }
}
