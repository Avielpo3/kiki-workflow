import { Component, OnInit } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'kiki-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.scss'],
})
export class PdfEditorComponent implements OnInit {
  //constructor() {}

  ngOnInit(): void {
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + '//' + location.host + '/assets/',
      document: '/assets/example.pdf',
      container: '#pspdfkit-container',
    }).then((instance) => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
    });
  }
}
