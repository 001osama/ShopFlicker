import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-unsuccessful',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-unsuccessful.component.html'
})
export class PaymentUnsuccessfulComponent {

}
