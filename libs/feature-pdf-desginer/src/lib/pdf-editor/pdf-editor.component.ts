import { Component } from '@angular/core';
import {
  NgxExtendedPdfViewerService,
  pdfDefaultOptions,
} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'kiki-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.scss'],
})
export class FeaturePdfDesginerComponent {
  constructor(private ngxService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }


  public firstName = 'Jane';

  public lastName = 'Doe';
  public country = 'Spain';
  public jobExperience = '6';
  public typeScript = true;

  public get formData(): { [fieldName: string]: string | number | boolean } {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      yearsOfExperience: this.jobExperience,
      typeScript: this.typeScript,
      country: this.country,
    };
  }

  public set formData(data: {
    [fieldName: string]: string | number | boolean | string[];
  }) {
    this.firstName = data.firstName as string;
    this.lastName = data.lastName as string;
    this.jobExperience = data.yearsOfExperience as string;
    this.country = data.country as string;
    this.typeScript = data.typeScript === 'true' || data.typeScript === true;
  }

  async test() {
    

  }

}
