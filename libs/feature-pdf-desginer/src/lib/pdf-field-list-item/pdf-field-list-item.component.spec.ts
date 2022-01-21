import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFieldListItemComponent } from './pdf-field-list-item.component';

describe('PdfFieldListItemComponent', () => {
  let component: PdfFieldListItemComponent;
  let fixture: ComponentFixture<PdfFieldListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFieldListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFieldListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
