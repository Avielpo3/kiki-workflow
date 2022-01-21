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

  pageRendered(e: any) {
    const pageEl: HTMLDivElement = e.source.div;
    const index: number = e.pageNumber;

    this.add(pageEl);
  }

  add(innerEl: HTMLElement): void {
    const div = document.createElement('div');
    div.className =
      'h-10 w-20 bg-green-500 z-50 border-gray-700 opacity-60 border ring-offset-2 focus:ring-2 hover:opacity-40 cursor-pointer';
    div.setAttribute('cdkDrag', '');
    div.setAttribute('cdkDragBoundary', '.page');
    div.setAttribute('tabindex', '1');
    div.style.display = 'flex';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';

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
