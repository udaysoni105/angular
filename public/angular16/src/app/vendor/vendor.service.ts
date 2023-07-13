import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private url = 'http://127.0.0.1:8000/api/vendor';

  constructor(private http: HttpClient) { }

  getVendor(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
