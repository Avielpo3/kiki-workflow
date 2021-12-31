import { Component } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'kiki-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.scss'],
})
export class FeaturePdfDesginerComponent {
  constructor() {
    //pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
}
