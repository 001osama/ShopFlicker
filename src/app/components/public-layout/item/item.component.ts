import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() name:string=''; 
  @Input() price:string=''; 
  @Input() src:string=''; 
  
  quantity:number=1; 
  
  increaseQuantity(){
    this.quantity = this.quantity + 1 ;
    console.log(this.quantity)
  }

  decreaseQuantity(){
    this.quantity = this.quantity - 1;
  }
}
