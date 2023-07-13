import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent {
  productId: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteProduct(): void {
    this.productService.hardDeleteProduct(this.productId).subscribe(
      (response) => {
        // console.log(response);
        // Perform any necessary actions after successful deletion
        this.router.navigate(['table']);
      },
      (error) => {
        console.error(error);
        // Handle the error scenario
      }
    );
  }

  softDeleteProduct(): void {
    this.productService.softDeleteProduct(this.productId).subscribe(
      (response) => {
        // console.log(response);
        this.router.navigate(['table']);
      },
      (error) => {
        console.error(error);
        // Handle the error scenario
      }
    );
  }
}
