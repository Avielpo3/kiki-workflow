import { LoginCredentials, selectCurrentRoute, selectRouteData, selectUrl } from '@kiki/interfaces';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CoreFacade, StoreRootState } from '@kiki-workspace/app-core';

@Component({
  selector: 'kiki-app-auth',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoginComponent implements OnInit {
  /**
   * The login form
   */
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public coreFacade: CoreFacade,
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

    if (this.loginForm.valid) {
      this.coreFacade.login(credentials);
    }
  }

  ngOnInit(): void {
    this.store.pipe(select(selectRouteData)).subscribe((route: any) => {
      console.log(route);
    });
  }
}
