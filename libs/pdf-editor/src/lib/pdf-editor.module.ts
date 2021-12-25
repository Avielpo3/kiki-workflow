import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfEditorComponent } from './pdf-editor/pdf-editor.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  declarations: [PdfEditorComponent],
  exports: [PdfEditorComponent],
})
export class PdfEditorModule {}
