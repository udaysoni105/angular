import { ResolveFn } from '@angular/router';

export const productTableResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
