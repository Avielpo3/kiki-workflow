import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'kiki-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.scss']
})
export class PdfEditorComponent implements OnInit {

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }

  ngOnInit(): void {
  }

}
