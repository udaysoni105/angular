import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { categoriesEditResolver } from './categories-edit.resolver';

describe('categoriesEditResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => categoriesEditResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
