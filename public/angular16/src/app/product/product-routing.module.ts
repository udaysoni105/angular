import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VendorTableComponent } from '../vendor/vendor-table/vendor-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: ProductCreateComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'table', component: ProductTableComponent },
  { path: 'delete/:id', component: ProductDeleteComponent },
  { path: 'view/:id', component: ProductDetailsComponent },
  { path: 'vendor', component: VendorTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

