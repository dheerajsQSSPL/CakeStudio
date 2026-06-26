import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLayout } from '../../../shared/components/auth-layout/auth-layout';
import { Logo } from '../../../shared/components/logo/logo';
import { SocialLogin } from '../../../shared/components/social-login/social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AuthLayout,
    Logo,
    SocialLogin
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})


export class Login {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);

    /*
       call api later
    */
  }
}