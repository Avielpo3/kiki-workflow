import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AppCoreModule } from '@kiki-workspace/app-core';

const pdfRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AppLoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pdfRoutes),
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    AppCoreModule
  ],
  declarations: [AppLoginComponent],
  providers: [],
})
export class AppAuthModule {}
