import { TestBed } from '@angular/core/testing';

import { KikiPdfFieldListService } from './pdf-field-list.service';

describe('PdfFieldListService', () => {
  let service: KikiPdfFieldListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KikiPdfFieldListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
