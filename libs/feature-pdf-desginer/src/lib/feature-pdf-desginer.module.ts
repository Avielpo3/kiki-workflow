import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePdfDesginerComponent } from './pdf-editor/pdf-editor.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

const pdfRoutes: Routes = [
  { path: '', component: FeaturePdfDesginerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
    RouterModule.forChild(pdfRoutes),
  ],
  declarations: [FeaturePdfDesginerComponent],
  exports: [FeaturePdfDesginerComponent],
})
export class FeaturePdfDesginerModule {}
