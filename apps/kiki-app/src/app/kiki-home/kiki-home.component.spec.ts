import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KikiHomeComponent } from './kiki-home.component';

describe('KikiHomeComponent', () => {
  let component: KikiHomeComponent;
  let fixture: ComponentFixture<KikiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KikiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KikiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
