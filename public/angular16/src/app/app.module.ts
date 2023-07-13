import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button'; // Import the ButtonModule
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoriesCreateComponent } from './categories/categories-create/categories-create.component';
import { CategoriesDeleteComponent } from './categories/categories-delete/categories-delete.component';
import { CategoriesEditComponent } from './categories/categories-edit/categories-edit.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { ChipsModule } from 'primeng/chips';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { VendorTableComponent } from './vendor/vendor-table/vendor-table.component';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DragDropModule } from 'primeng/dragdrop';
import { SkeletonModule } from 'primeng/skeleton';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { TreeModule } from 'primeng/tree';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    CategoriesCreateComponent,
    CategoriesDeleteComponent,
    CategoriesEditComponent,
    ProductTableComponent,
    DashboardComponent,
    ProductDetailsComponent,
    VendorTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    ChipsModule,
    SplitButtonModule,
    ToastModule,
    MenubarModule,
    RouterModule,
    ReactiveFormsModule,
    DropdownModule,
    FieldsetModule,
    MenuModule,
    DialogModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    KeyFilterModule,
    PasswordModule,
    SelectButtonModule,
    DragDropModule,
    SkeletonModule,
    RippleModule,
    AccordionModule,
    TreeModule,
    FileUploadModule,
    ConfirmDialogModule,
    MultiSelectModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
