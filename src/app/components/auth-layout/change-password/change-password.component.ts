import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../shared/input/input.component";
import { PasswordValidator } from 'src/app/validators/password-match.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-change-password',
    standalone: true,
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, InputComponent]
})
export class ChangePasswordComponent implements OnInit{

  form!: FormGroup;

  email = new FormControl('',Validators.required);
  token = new FormControl('',Validators.required);
  password = new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);
  confirmPassword = new FormControl('',Validators.required);

  constructor(
    private _authService:AuthService,
    private _activatedRoute:ActivatedRoute,
    private _fb:FormBuilder,
    private _router:Router
    ) {}
  
  ngOnInit(): void {
    
    this._activatedRoute.queryParams
    .subscribe(params => {
      console.log(params)
      this.token.setValue(params['token']);
      this.email.setValue(params['email']);
      console.log(this.token );
      console.log(this.email);
    }
    );
    
    this.form = this._fb.group({
      email: this.email,
      encodedToken: this.token,
      password: this.password,
      confirmPassword: this.confirmPassword
    },
    { validators:PasswordValidator } as AbstractControlOptions);
  }

  submit(){
    console.log(this.form.value);
    this._authService.changePassword(this.form.value).subscribe({
      complete:() => this._router.navigate(['./passwordChangeSuccess']),
      error:() => this._router.navigate(['/passwordChangeFailed'])
    })
  }
}