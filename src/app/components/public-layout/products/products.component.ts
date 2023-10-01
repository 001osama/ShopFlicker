import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";
import { PublicLayoutService } from '../public-layout.service';
import { CartService } from 'src/app/services/cart.service';
import { AddCartItem } from 'src/app/models/addCartItem';
import { environment } from 'src/environments/environment.development';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    imports: [CommonModule, ItemComponent, ReactiveFormsModule]
})
export class ProductsComponent implements OnInit {
    searchForm:FormGroup = new FormGroup({
        search: new FormControl('')
    });
    apiUrl:string = environment.apiURL;
    products:any[]=[];
    constructor(private service: PublicLayoutService,
        private cartService: CartService ) 
        {
            this.searchForm.get('search')?.valueChanges
            .pipe(
                debounceTime(1000),
                distinctUntilChanged(),
                switchMap( x => this.service.getProducts(x))
            )
            .subscribe(x => {this.products = x.result; console.log(x)})
        }

    ngOnInit(): void {
        this.service.getProducts().subscribe( response => this.products = response.result );
    }

    addToCart(cartItem:AddCartItem){
        this.cartService.addToCart(cartItem)
        .subscribe();
    }


}
