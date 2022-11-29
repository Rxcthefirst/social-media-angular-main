import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isEmailInvalid = false;


  hasError = false;
  message = "";

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  

  constructor(private authService: AuthService, private router: Router) { }
  
  onSubmit(e: any): void {
    e.preventDefault();
    this.isEmailInvalid = true;
    
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
