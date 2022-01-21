import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePdfDesginerComponent } from './pdf-editor/pdf-editor.component';
import { PdfFieldListComponent } from './pdf-field-list/pdf-field-list.component';
import { PdfFieldListItemComponent } from './pdf-field-list-item/pdf-field-list-item.component';
import { KikiPdfFieldListService } from './pdf-field-list.service';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PdfViewerModule } from 'ng2-pdf-viewer';

const pdfRoutes: Routes = [
  { path: '', component: FeaturePdfDesginerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pdfRoutes),
    MatIconModule,
    DragDropModule,
    PdfViewerModule
  ],
  providers: [KikiPdfFieldListService],
  declarations: [
    FeaturePdfDesginerComponent,
    PdfFieldListComponent,
    PdfFieldListItemComponent,
  ],
  exports: [FeaturePdfDesginerComponent],
})
export class FeaturePdfDesginerModule {}
