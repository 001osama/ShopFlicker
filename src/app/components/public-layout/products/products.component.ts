import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";
import { BaseService } from 'src/app/services/base.service';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    imports: [CommonModule, ItemComponent]
})
export class ProductsComponent implements OnInit {
    
    products:any;
    constructor(private baseService:BaseService) {}

    apiUrl = this.baseService.apiUrl;

    ngOnInit(): void {
        this.baseService.get().subscribe( response => this.products = response.result );
    }
}
