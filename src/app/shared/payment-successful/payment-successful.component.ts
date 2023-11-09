import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-successful',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.scss']
})
export class PaymentSuccessfulComponent {

}
