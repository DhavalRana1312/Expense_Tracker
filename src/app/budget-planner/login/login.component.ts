import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected 'styleUrls'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;


  myEmail: any
  myPassword: any
  myUsername: any


  // Store email
  submittedEmail: string = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });




  }


  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email == 'dhavalrana@gmail.com' && password == 'admin') {
        this.submittedEmail = this.loginForm.value.email;
        this.router.navigate(['dashboard']);
      } else {
        alert("Invalid Email or Password.");
      }
    }
  }



  onLoginSubmit(): void {
    this.login();
  }


  onNavigateRegister() {
    this.router.navigate(['register']);
  }
  onNavigateLogin() {
    this.router.navigate(['']);
  }

}
