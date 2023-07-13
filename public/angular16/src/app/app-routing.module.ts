import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductRoutingModule } from './product/product-routing.module';
import { VendorTableComponent } from './vendor/vendor-table/vendor-table.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vendor', component:  VendorTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

