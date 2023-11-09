import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  sendingRequest = false;


  /**
   *
   */
  constructor(
    private _emailService:EmailService
  ) {}

  form = {
    email : '',
  };


  subscribe(){
    this.sendingRequest = true
    this._emailService.subscription(this.form.email).subscribe({
      complete:()=>this.sendingRequest=false,
      error:(err)=>{
        console.error(err);
        this.sendingRequest = true;
      } 
    })
  }

}
