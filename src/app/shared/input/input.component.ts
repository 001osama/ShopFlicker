import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() placeholder='';
  @Input() type="text";
  @Input() control:FormControl = new FormControl();
  @Input() label:string='default'
}
