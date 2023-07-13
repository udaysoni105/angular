import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { SortEvent } from 'primeng/api';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  providers: [ConfirmationService,MessageService],
})

export class ProductTableComponent implements OnInit {
  product: Product[] = [];
  searchQuery: string = '';
  @ViewChild('table') table!: Table;
  menuItems: MenuItem[] = [];
  displayAddModel =false;
  displayConfirmation: boolean = false;
  rejectVisible = false; 
  vendors: any[] = [];
  checkedVendors: any[] = [];
  
  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.product = response;
      },
      (error: any) => {
        console.error('Error getting products:', error);
      }
    );
  }

  softDeleteProduct(id: number): void {
    this.productService.softDeleteProduct(id).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product soft deleted successfully',
        });
        this.getProductList();
      },
      (error) => {
        console.error('Error soft deleting product:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to soft delete product',
        });
      }
    );
  }

  hardDeleteProduct(id: number): void {
    this.displayAddModel = true;
    this.confirmationService.confirm({
      message: 'Are you sure you want to hard delete this product?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.hardDeleteProduct(id).subscribe(
          (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Product hard deleted successfully',
            });
            this.getProductList();
          },
          (error) => {
            console.error('Error hard deleting product:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to hard delete product',
            });
          }
        );
      }
    });
  }

  confirmHardDelete(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to hard delete this product?',
      accept: () => {
        this.deleteProduct(id);
      },
      reject: () => {
        this.rejectHardDelete();
      }
    });
  }
  
  deleteProduct(id: number): void {
    this.productService.hardDeleteProduct(id).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product hard deleted successfully',
        });
        this.getProductList();
      },
      (error) => {
        console.error('Error hard deleting product:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to hard delete product',
        });
      }
    );
  }
  
  rejectHardDelete(): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'Cancelled',
      detail: 'Hard delete operation cancelled',
    });
    this.rejectVisible = true; 
  }
  
  viewProduct(id: number): void {
    this.router.navigate(['/view', id]);
  }

  onSearch(): void {
    this.table.filter(this.searchQuery, 'Name', 'contains');
  }

  onSort(event: SortEvent): void {
  }
}

