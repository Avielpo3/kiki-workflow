import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@kiki/ui';
import { PdfEditorModule } from '@kiki/pdfkit';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    PdfEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
