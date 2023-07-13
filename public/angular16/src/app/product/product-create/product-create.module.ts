import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create.component';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class ProductCreateModule { }
