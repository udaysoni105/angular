import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product as ProductInterface } from '../product'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductInterface | null = null; 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.getProduct(productId);
  }

  getProduct(productId: string) {
    this.productService.getProduct(productId).subscribe(
      (product: ProductInterface) => { 
        this.product = product;
      },
      (error: any) => {
        console.log('Error fetching product:', error);
      }
    );
  }
}
