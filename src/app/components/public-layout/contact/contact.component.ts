import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../shared/input/input.component";
import { EmailService } from 'src/app/services/email.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [CommonModule, InputComponent, ReactiveFormsModule]
})
export class ContactComponent implements OnInit{
  contactForm! : FormGroup;
  sendingRequest = false;
  
  constructor(
    private _emailService:EmailService,
    private _fb:FormBuilder
  ) {}

  name = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required, Validators.email]);
  message = new FormControl('', Validators.required);
  
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name:this.name,
      email:this.email,
      message:this.message
    });
  }

  submit(){
    this.sendingRequest = true
    console.log(this.contactForm.value);
    this._emailService.contactUs(this.contactForm.value).subscribe();
    setTimeout(() => {
      this.sendingRequest = false;
    }, 1000);
  }

}
