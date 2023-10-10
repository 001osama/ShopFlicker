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
    styleUrls: ['./cart.component.scss'],
    imports: [CommonModule, LoaderComponent]
})
export class CartComponent implements OnInit{
  apiUrl:string = environment.apiURL;
  carts:any[]=[];
  isCartOpen$: Observable<boolean> | undefined;
  totalPrice!:number;

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
        },
        error:(err)=> console.error(err),
        complete:()=>this.loader.hideLoader()
      }
    );
  }

  removeItem(id:number){
    this.cartService.removeItem(id);
    this.carts = this.carts.filter(x=> x.id != id);
  }
  
  closeCart(){
    this.cartService.hideCart();
  }

  checkout(){
    this.cartService.checkout()
      .subscribe( x => {
        console.log(x);
        location.href = x.url;
      })
      
  }
}
