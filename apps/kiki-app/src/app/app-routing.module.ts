import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('@kiki-workspace/app-auth').then((mod) => mod.AppAuthModule),
  },
  {
    path: 'pdf-editor',
    loadChildren: () =>
      import('@kiki-workspace/feature-pdf-desginer').then((mod) => mod.FeaturePdfDesginerModule),
  }
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
