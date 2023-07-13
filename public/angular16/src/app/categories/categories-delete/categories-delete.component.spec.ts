import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDeleteComponent } from './categories-delete.component';

describe('CategoriesDeleteComponent', () => {
  let component: CategoriesDeleteComponent;
  let fixture: ComponentFixture<CategoriesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesDeleteComponent]
    });
    fixture = TestBed.createComponent(CategoriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
