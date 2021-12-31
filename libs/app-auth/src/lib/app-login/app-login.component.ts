import { getCurrentRouteState } from '@kiki/interfaces';
import { AuthFacade } from './../+state/auth/auth.facade';
import { LoginCredentials } from './modals/login.modal';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StoreRootState } from '@kiki/interfaces';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'kiki-app-auth',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAuthComponent implements OnInit {
  /**
   * The login form
   */
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authFacade: AuthFacade,
    private store: Store<StoreRootState>
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

    this.authFacade.login(credentials);
  }

  ngOnInit(): void {
    this.store
      .pipe(select(getCurrentRouteState))
      .subscribe((route: any) => {
        console.log(route);
        
      });
  }
}


