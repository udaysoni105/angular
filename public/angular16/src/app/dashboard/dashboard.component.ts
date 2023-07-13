import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';



interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  data: any;
  options: any;
  items: any[] | undefined;
  date: Date | undefined;

  selectedItem: any;
  suggestions: any[] = [];

  products: any[] = [];

  value!: string;
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];




  constructor(private http: HttpClient ,private messageService: MessageService,private productService: ProductService) { }

  ngOnInit() {
    this.fetchSuggestions();

    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error(error); // Handle error
      }
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.http.get<any[]>('http://127.0.0.1:8000/api/product').subscribe(data => {
      const highestPrices = this.getHighestPrices(data, 4); // Get the four highest prices

      this.data = {
        labels: highestPrices.map((product: any) => product.Name),
        datasets: [{
          label: 'Product',
          data: highestPrices.map((product: any) => product.SalePrice),
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(188, 120, 146, 0.8)',
            'rgba(221, 196, 204, 0.8)'
          ],
          borderWidth: 1
        }]
      };

      this.options = {
        responsive: false,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: this.getHighestPrice(highestPrices)
          }
        }
      };
    }, error => console.error(error));
  }

  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  getHighestPrices(products: any[], count: number): any[] {
    products.sort((a: any, b: any) => b.SalePrice - a.SalePrice);
    return products.slice(0, count);
  }

  getHighestPrice(products: any[]): number {
    let highestPrice = 0;
    for (const product of products) {
      if (product.SalePrice > highestPrice) {
        highestPrice = product.SalePrice;
      }
    }
    return Math.ceil(highestPrice);
  }

  fetchSuggestions() {
    this.http
      .get<any[]>('http://127.0.0.1:8000/api/product')
      .subscribe(
        (response) => {
          console.log(response); // Check the response data in the browser console
          this.suggestions = response;
        },
        (error) => {
          console.error(error); // Handle error
        }
      );
  }

  search(event: AutoCompleteCompleteEvent) {
    // Make an HTTP request to your backend API
    this.http.get<any[]>('http://127.0.0.1:8000/api/product').subscribe(
      (response) => {
        // Set the suggestions with the fetched data
        this.suggestions = response;
      },
      (error) => {
        console.error(error); // Handle error
      }
    );
  }
}
