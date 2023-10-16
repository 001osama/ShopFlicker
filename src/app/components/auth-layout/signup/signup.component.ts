import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { InputComponent } from "../../../shared/input/input.component";

@Component({
    selector: 'app-signup',
    standalone: true,
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    imports: [CommonModule, RouterLink, ReactiveFormsModule, InputComponent]
})
export class SignupComponent implements OnInit,OnDestroy{
  form!: FormGroup;
  subscription! : Subscription;


  username = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);
  confirmPassword = new FormControl('',Validators.required);

  constructor(
    private _fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.form = this._fb.group({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }
  
  register(){
    this.subscription = this.authService.register(this.form.value).subscribe(
      () => this.router.navigate(['/login'])
    )
  }
  
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
