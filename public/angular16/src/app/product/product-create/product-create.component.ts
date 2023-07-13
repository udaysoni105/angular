import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  product: any = {};
  visible: boolean = false;

  productForm: FormGroup;
  vendor: any[] = [];
  checkedVendors: any[] = [];
  @Output() vendorSelected: EventEmitter<any> = new EventEmitter<any>();
  @Input() selectedVendor: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {    this.productForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.maxLength(255)]],
    // Description: ['', [Validators.required, Validators.maxLength(5000)]],
    Sku: ['', [Validators.required, Validators.maxLength(16)]],
    InstockQuantity: ['', [Validators.required, Validators.min(0), Validators.max(999999)]],
    SalePrice: ['', [Validators.required, Validators.min(0), Validators.max(999999.99)]],
    vendorIds:['',[Validators.required]]
  });}

  onSubmit(productForm: NgForm) {
    this.checkedVendors = this.vendor.filter((vendor) => vendor.isChecked);
  
    if (productForm.valid) {
      const vendorIds = this.checkedVendors.map((vendor) => vendor.id);
      const data = { ...this.product, vendorid: vendorIds };
      console.log('Selected data:', data);
      console.log(vendorIds);

      this.productService.createProduct(data).subscribe(
        (response) => {
          productForm.reset();
          this.router.navigate(['table']);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
 

  isPositiveNumber(value: any): boolean {
    return value > 0;
  }
  

  showDialog() {
    this.visible = true;
  }

  onCancel() {
    this.router.navigate(['/table']);
  }
  onVendorSelected(checkedVendors: any) {
    this.vendorSelected.emit(checkedVendors);
  }  
  
  // onVendorSelectionChange(checkedVendors: any[]) {
  //   this.selectedVendor = checkedVendors;
  // }
}
