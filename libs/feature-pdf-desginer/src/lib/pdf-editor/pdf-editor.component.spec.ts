import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePdfDesginerComponent } from './pdf-editor.component';

describe('FeaturePdfDesginerComponent', () => {
  let component: FeaturePdfDesginerComponent;
  let fixture: ComponentFixture<FeaturePdfDesginerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturePdfDesginerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePdfDesginerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
