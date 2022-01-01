import {
  AppCoreModule,
  CustomSerializer,
  KikiHttpInterceptor,
} from '@kiki-workspace/app-core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@kiki/ui';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

/**
 * Global HTTP interceptor
 */
const HttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KikiHttpInterceptor,
  multi: true,
};

/**
 * Global store from NGRX
 */
const RootStoreModule = StoreModule.forRoot(
  {
    router: routerReducer,
  },
  {
    metaReducers: !environment.production ? [] : [],
    runtimeChecks: {
      strictActionImmutability: true,
      strictStateImmutability: true,
    },
  }
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    AppCoreModule,
    FormsModule,
    AppRoutingModule,
    RootStoreModule,
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
