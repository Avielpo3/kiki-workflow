import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthComponent } from './app-login/app-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth/auth.reducer';
import { AuthEffects } from './+state/auth/auth.effects';
import { AuthFacade } from './+state/auth/auth.facade';
import { AppAuthService } from './app-login/services/app-auth.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppAuthComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    HttpClientModule,
  ],
  declarations: [AppAuthComponent],
  providers: [AuthFacade, AppAuthService],
})
export class AppAuthModule {}
