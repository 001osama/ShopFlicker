import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";
import { PublicLayoutService } from '../public-layout.service';
import { CartService } from 'src/app/services/cart.service';
import { AddCartItem } from 'src/app/models/addCartItem';
import { environment } from 'src/environments/environment.development';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { LoaderComponent } from "../../../shared/loader/loader.component";
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    providers:[LoaderService],
    imports: [CommonModule, ItemComponent, ReactiveFormsModule, LoaderComponent]
})
export class ProductsComponent implements OnInit {
    searchForm:FormGroup = new FormGroup({
        search: new FormControl('')
    });
    apiUrl:string = environment.apiURL;
    products:any[]=[];
    
    constructor(private _service: PublicLayoutService,
        private _cartService: CartService,
        private _loader:LoaderService ) 
        {
            this.searchForm.get('search')?.valueChanges
            .pipe(
                debounceTime(250),
                distinctUntilChanged(),
                switchMap( x => this._service.getProducts(x))
            )
            .subscribe(x => this.products = x.result)
        }

    ngOnInit(): void {
        this._loader.showLoader();
        this._service.getProducts().subscribe({
            next: (response) => this.products = response.result,
            error:(err)=> console.error(err),
            complete:()=>this._loader.hideLoader()
        });
    }

    addToCart(cartItem:AddCartItem){
        this._cartService.addToCart(cartItem)
        .subscribe();
    }

}
