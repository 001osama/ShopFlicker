import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { InputComponent } from "../../../shared/input/input.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule, RouterLink, ReactiveFormsModule, InputComponent]
})
export class LoginComponent implements OnInit,OnDestroy{

  result!: Subscription;
  form!: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) {}

    email = new FormControl('',[Validators.required, Validators.email]);
    password = new FormControl('',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);
      

    
    ngOnInit(): void {
      this.form = this._fb.group({
        email: this.email,
        password: this.password
      });
    }
    
    login(){
      this.result = this.authService.login(this.form.value).subscribe({
        next: res => {
            localStorage.setItem("Token",res.result.token);
            this.authService.loggedIn();
          },
        error:(err) => console.error(err),
        complete:() => this.router.navigate(['/products'])
        });
        // console.log(this.form);
      }
    

    ngOnDestroy(): void {
      if(this.result){
        this.result.unsubscribe();
      }
    }
}
