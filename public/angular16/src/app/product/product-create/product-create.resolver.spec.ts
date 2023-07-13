import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productCreateResolver } from './product-create.resolver';

describe('productCreateResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productCreateResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
