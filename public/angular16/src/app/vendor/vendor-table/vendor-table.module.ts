import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorTableComponent } from './vendor-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    VendorTableComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule
  ]
})
export class VendorTableModule { }
