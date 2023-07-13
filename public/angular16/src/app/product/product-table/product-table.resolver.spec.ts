import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productTableResolver } from './product-table.resolver';

describe('productTableResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productTableResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
