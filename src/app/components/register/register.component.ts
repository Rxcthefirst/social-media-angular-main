import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  hasError = false;
  message = "";

  constructor(private authService: AuthService, private router: Router) {}

  registerForm = new FormGroup({
    firstName: new FormControl('', 
      Validators.required
    ),
    lastName: new FormControl('', 
      Validators.required
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  
  onSubmit(e: any): void {
    let hasError = false;
    e.preventDefault();

    Object.values(this.registerForm.controls).forEach((value: any) => { 
      if (value.errors) hasError = true
    ;})
    
    if (!hasError) {
      this.hasError = false;
      this.authService.register(this.registerForm.value.firstName || "", this.registerForm.value.lastName || "", this.registerForm.value.email || "", this.registerForm.value.password || "")
        .subscribe({
          next: response => {
            this.router.navigate(['login'])
          },

          error: response => {
            this.hasError = true;
            this.message = response.error;
          }
      })
    }
  }

}
