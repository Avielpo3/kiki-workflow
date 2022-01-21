import {
  KikiPdfFieldListService,
  PdfFieldListItem,
} from './../pdf-field-list.service';
import { Component, Input } from '@angular/core';
import { DragDrop } from '@angular/cdk/drag-drop';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'kiki-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.scss'],
})
export class FeaturePdfDesginerComponent {
  /**
   * Indicates if the filed list is visible
   */
  @Input() isSidebarVisible = false;

  /**
   * Bound to the current page index.
   */
  @Input() page = 1;

  constructor(
    public fieldService: KikiPdfFieldListService,
    public dragDropService: DragDrop
  ) {}

  textLayerRendered(e: Event): void {
    const div = document.createElement('div');
    div.className = 'h-20 w-20 bg-gray-500 z-50 drag';
    div.setAttribute('cdkDrag', '');
    div.setAttribute('cdkDragBoundary', '.page');
    div.style.display = 'flex';
    div.style.position = 'absolute';
    const innerEl = document
      .getElementsByClassName('pdfViewer')[0]
      .getElementsByClassName('page')[0] as HTMLElement;

    innerEl.appendChild(div);
    // const el = document.getElementsByClassName('fragging')[0] as HTMLElement;

    const drag = this.dragDropService.createDrag(div);
    drag.withBoundaryElement(innerEl);

    const dropList = this.dragDropService.createDropList(innerEl);
    
    //dropList.withItems([drag])
    // drag.withParent(dropZone)
    //drag.withBoundaryElement(dropZone)
  }

  onFieldClick(field: PdfFieldListItem): void {
    console.log(field.name);
  }
}
