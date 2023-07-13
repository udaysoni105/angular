import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { categoriesCreateResolver } from './categories-create.resolver';

describe('categoriesCreateResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => categoriesCreateResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
