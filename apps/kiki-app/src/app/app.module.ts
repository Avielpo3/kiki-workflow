import { KikiHttpInterceptor } from './core/interceptors/http.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@kiki/ui';
import { FeaturePdfDesginerModule } from '@kiki-workspace/feature-pdf-desginer';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppAuthModule } from '@kiki-workspace/app-auth';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './core/serializers/router-state.serialzier';
import { reducers } from '@kiki/interfaces';

const HttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KikiHttpInterceptor,
  multi: true,
};



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    FormsModule,
    AppAuthModule,
    FeaturePdfDesginerModule,
    AppRoutingModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [HttpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
