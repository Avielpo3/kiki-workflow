import { AuthFacade } from './../+state/auth/auth.facade';
import { login } from './../+state/auth/auth.actions';
import { LoginCredentials } from './modals/login.modal';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppAuthService } from './services/app-login.service';

@Component({
  selector: 'kiki-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAuthComponent {
  /**
   * The login form
   */
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public authFacade: AuthFacade) {
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

    this.authFacade.login(credentials);
  }
}
