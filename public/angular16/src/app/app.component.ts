import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: MenuItem[] = [];
  activeItem: MenuItem = { label: 'Home', icon: 'pi pi-fw pi-home' };


  constructor(private router: Router) {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/dashboard']);
        }
      },
      {
        label: 'Product',
        icon: 'pi pi-shopping-cart',
        command: () => {
          this.router.navigate(['/table']);
        }
      },
      {
        label: 'Create',
        icon: 'pi pi-plus',
        command: () => {
          this.router.navigate(['/create']);
        }
      }
    ];
  }

}
