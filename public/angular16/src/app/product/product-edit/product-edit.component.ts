import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [MessageService]
})
export class ProductEditComponent implements OnInit {
  id: any;
  product: any;
  public productForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Sku: ['', Validators.required],
      InstockQuantity: ['', Validators.required],
      SalePrice: ['', Validators.required],
    });

    this.id = this.route.snapshot.params['id'];
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProducts(this.id).subscribe(
      (response: any) => {
        this.product = response;
        this.productForm.patchValue(this.product);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onUpdate() {
    if (this.productForm.invalid) {
      return;
    }
  
    const updatedData = this.productForm.value;
  
    this.productService.updateDataApi(this.id, updatedData).subscribe(
      (response: any) => {
        // Handle the response from the backend
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        setTimeout(() => {
          this.router.navigate(['/table']);
        }, 1500); // Delay of 1500 milliseconds (1.5 seconds) before redirecting to the table
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 
  onCancel() {
    this.router.navigate(['/table']);
  }
}
