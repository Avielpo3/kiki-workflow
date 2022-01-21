import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable()
export class KikiPdfFieldListService {
  private readonly fieldListItems = [
    { name: 'text', icon: 'text_fields' },
    { name: 'select', icon: 'list_alt' },
  ];

  private readonly _fieldList$: BehaviorSubject<PdfFields> =
    new BehaviorSubject<PdfFields>({});

  public get fieldList$(): Observable<PdfFields> {
    return this._fieldList$.asObservable();
  }

  public pageFieldList$(page: number): Observable<PdfFields> {
    return this._fieldList$.pipe(
      map((fieldObj: PdfFields) => {
        const arr = [];
        for (const key in fieldObj) {
          if (fieldObj[key].page === page) {
            arr.push(fieldObj[key]);
          }
        }

        return arr;
      })
    );
  }

  public get fieldList(): PdfFields {
    return this._fieldList$.getValue();
  }

  public getField(id: number): PdfFieldData {
    if (!this.fieldList[id]) {
      throw Error(`Field with ID[${id}] does not exists`);
    }

    return this.fieldList[id];
  }

  public addField(): void {
    this._fieldList$.getValue();
  }

  public get menuFieldList(): any {
    return this.fieldListItems;
  }

  constructor() {}
}

export interface PdfFieldListItem {
  name: string;
  icon?: string;
}

export interface PdfFields {
  [key: number]: PdfFieldData;
}

export interface PdfFieldData {
  page: number;
  type: number;
}
