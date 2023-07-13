import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { categoriesDeleteResolver } from './categories-delete.resolver';

describe('categoriesDeleteResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => categoriesDeleteResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
