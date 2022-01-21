import { Injectable } from '@angular/core';

@Injectable()
export class KikiPdfFieldListService {
  private readonly fieldListItems = [
    { name: 'text', icon: 'text_fields' },
    { name: 'select', icon: 'list_alt' },
  ];

  public get fieldList(): any {
    return this.fieldListItems;
  }

  constructor() {}
}

export interface PdfFieldListItem {
  name: string;
  icon?: string;
}
