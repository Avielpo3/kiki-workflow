import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFieldListComponent } from './pdf-field-list.component';

describe('PdfFieldListComponent', () => {
  let component: PdfFieldListComponent;
  let fixture: ComponentFixture<PdfFieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFieldListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
