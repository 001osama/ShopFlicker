import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoaderService } from 'src/app/services/loader.service';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    providers: [LoaderService],
    imports: [CommonModule, LoaderComponent]
})
export class CartComponent implements OnInit{
  sendingRequest = false;
  apiUrl:string = environment.apiURL;
  carts:any[]=[];
  isCartOpen$: Observable<boolean> | undefined;
  total!:number;

  constructor(
    public cartService: CartService, 
    public loader:LoaderService
  ){}
  
  ngOnInit(): void {
    this.isCartOpen$ = this.cartService.cartStatus();
    this.cartService.CartOpen$.subscribe((isOpen) => {
      if(isOpen) {
        this.getCartItems();
      }
    });
  }

  getCartItems() {
    this.loader.showLoader();
    this.cartService.getCartItems().subscribe(
      {
        next:(res) => {
          this.carts = res.result;
          this.total = this.carts.reduce((acc, cartItem) => acc + cartItem.totalPrice, 0);
          console.log('total is '+this.total);
        },
        error:(err)=> console.error(err),
        complete:()=>this.loader.hideLoader()
      }
    );
  }


  removeItem(id:number){
    this.cartService.removeItem(id)
    .subscribe(() => {
      this.carts = this.carts.filter(x=> x.id != id),
      this.total = this.carts.reduce((acc,cartItem)=> acc + cartItem.totalPrice,0)
    });
  }

  
  closeCart(){
    this.cartService.hideCart();
  }
  

  checkout(){
    this.sendingRequest = true;
    this.cartService.checkout()
      .subscribe( x => {
        location.href = x.url;
        setTimeout(() => {
          this.sendingRequest = false;
        }, 1000);
      })
  }
}
