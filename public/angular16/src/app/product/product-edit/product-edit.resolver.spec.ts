import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productEditResolver } from './product-edit.resolver';

describe('productEditResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productEditResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
