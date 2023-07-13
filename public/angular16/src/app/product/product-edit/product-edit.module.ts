import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessageService
  ],
  exports: [ProductEditComponent]
})

export class ProductEditModule { }



