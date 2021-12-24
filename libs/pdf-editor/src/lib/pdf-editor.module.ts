import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfEditorComponent } from './pdf-editor/pdf-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PdfEditorComponent
  ],
  exports:[
    PdfEditorComponent
  ]
})
export class PdfEditorModule {}
