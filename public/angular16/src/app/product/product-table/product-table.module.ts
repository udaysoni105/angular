import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ProductTableComponent } from './product-table.component'; // Import your component here
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToastModule,
    DropdownModule,
    MenuModule,
    FormsModule,
    Component,
    ViewChild,
    ConfirmationService,
    ConfirmDialogModule
  ],
  exports:[
    ButtonModule,
    ProductTableComponent
  ]
})
export class ProductTableModule { }

