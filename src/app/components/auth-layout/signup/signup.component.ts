import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,OnDestroy{
  form!: FormGroup;
  subscription! : Subscription;
  constructor(
    private _fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.form = this._fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    });
  }
  
  
  
  register(){
    this.subscription = this.authService.register(this.form.value).subscribe(
      () => this.router.navigate(['/login'])
    )
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
