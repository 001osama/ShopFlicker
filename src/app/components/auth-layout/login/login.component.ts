import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy{

  result!: Subscription;
  form!: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) {}

    
    ngOnInit(): void {
      this.form = this._fb.group({
        email: ['',[Validators.required]],
        password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]]
      });
    }
    
    login(){
      this.result = this.authService.login(this.form.value).subscribe({
        next: res => {
            localStorage.setItem("Token",res.result.token);
          },
        error:(err) => console.error(err),
        complete:() => this.router.navigate(['/products'])
        });
      }
    

    ngOnDestroy(): void {
      if(this.result){
        this.result.unsubscribe();
      }
    }
}
