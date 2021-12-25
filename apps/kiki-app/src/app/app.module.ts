import { KikiHttpInterceptor } from './core/interceptors/http.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@kiki/ui';
import { PdfEditorModule } from '@kiki/pdfkit';
import { AppRoutingModule } from './app-routing.module';

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
    PdfEditorModule,
    AppRoutingModule,
  ],
  providers: [HttpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
