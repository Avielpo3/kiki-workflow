import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePdfDesginerComponent } from './pdf-editor/pdf-editor.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  declarations: [FeaturePdfDesginerComponent],
  exports: [FeaturePdfDesginerComponent],
})
export class FeaturePdfDesginerModule {}
