import { login } from './../+state/auth/auth.actions';
import { LoginCredentials } from './modals/login.modal';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppLoginService } from './services/app-login.service';

@Component({
  selector: 'kiki-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent implements OnInit {
  /**
   * The login form
   */
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: AppLoginService,
    private store: Store
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  public get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    const credentials: LoginCredentials = {
      email: this.email?.value,
      password: this.password?.value,
    };

    this.store.dispatch(login(credentials));
  }

  ngOnInit(): void {
    console.log('mounted');
  }
}
