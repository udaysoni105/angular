import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productDeleteResolver } from './product-delete.resolver';

describe('productDeleteResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productDeleteResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
