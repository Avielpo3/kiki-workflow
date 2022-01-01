import { TestBed } from '@angular/core/testing';
import { KikiHttpInterceptor } from './http.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [KikiHttpInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: KikiHttpInterceptor =
      TestBed.inject(KikiHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
