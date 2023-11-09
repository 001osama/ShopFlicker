import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  constructor(
    private _authService:AuthService,
    private _router:Router) {}

    sendingRequest = false;

  form = {
    email : '',
  };

  

  sendResetPasswordReq(){
    this.sendingRequest = true;
    console.log(this.form.email);
    this._authService.resetPassword(this.form.email).subscribe(
      {
        next:()=>{
          this._router.navigate(['/emailSent']);
          this.sendingRequest = true;
        },
        error: (err)=> {
          console.error(err);
          this.sendingRequest = true;
        }
      });
  }
}
