import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getDataApi() {
    throw new Error('Method not implemented.');
  }
  form: any;


  constructor(private http: HttpClient) {}

 
  private apiUrl = 'http://127.0.0.1:8000/api/product'; 
 
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
 
  getProducts(id?: number): Observable<Product[]> {
    if (id) {
      // Retrieve a single product by ID
      return this.http.get<Product[]>(`${this.apiUrl}/${id}`);
    } else {
      // Retrieve all products
      return this.http.get<Product[]>(this.apiUrl);
    }
  }

  editProduct(product: Product): Observable<Product> {
    const url = `http://127.0.0.1:8000/api/update/${product.id}`;
    return this.http.patch<Product>(url, product);
  }


  updateDataApi(id: number, updatedData: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/product/update/' + id;
    return this.http.put(url, updatedData);
  }

  
  getProduct(productId: string): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }

  hardDeleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/`;
    // return this.http.get('http://127.0.0.1:8000/api/product/' + id + '/delete'); }
    return this.http.delete(url);
  }

    softDeleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
