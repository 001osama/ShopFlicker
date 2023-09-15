import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    imports: [CommonModule, ItemComponent]
})
export class ProductsComponent {

    products= [
        {
            name: 'Cucumber',
            price: '19',
            quantity: '1',
            src: './assets/_images/_products/cucumber.png'
        },
    ]
    

}
