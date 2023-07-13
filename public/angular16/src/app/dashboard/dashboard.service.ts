import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getChartData() {
    // Adjust the URL based on your API endpoint for fetching chart data
    const url = 'http://127.0.0.1:8000/chart';
    return this.http.get<any>(url);
  }
}
