import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { VendorService } from '../vendor.service';
import { DialogService } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.scss'],
  providers: [DialogService]
})

// export class VendorTableComponent implements OnInit {
//   vendor: any[] = [];
//   visible: boolean = false;
//   checkedVendors: any[] = [];


//   @Output() vendorSelected: EventEmitter<any> = new EventEmitter<any>();
//   @Input() selectedVendor: any;
//   constructor(private vendorService: VendorService, private dialogService: DialogService) {}

//   ngOnInit(): void {
//     this.getVendorList();
//   this.fetchVendors();
//     }
//     fetchVendors() {
//       this.vendorService.getVendor().subscribe(
//         (data) => {
//           this.vendor = data;
//         },
//         (error) => {
//           console.error('Error fetching vendors:', error);
//         }
//       );
//     }

//   showDialog() {
//     this.visible = true;
//   }

//   getVendorList(): void {
//     this.vendorService.getVendor().subscribe(
//       (response: any) => {
//         this.vendor = response;
//       },
//       (error: any) => {
//         console.error('Error getting vendors:', error);
//       }
//     );
//   }

//   onVendorSelected(vendor: any) {
//     this.selectedVendor = vendor;
//     this.vendorSelected.emit(vendor);
//   }

//   onSubmit() {
//     this.checkedVendors = this.vendor.filter((vendor) => vendor.isChecked);
//     if (!this.selectedVendor) {
//       return this.selectedVendor ;
//     }
    
    
//     const ref = this.dialogService.open(VendorTableComponent, {
//       header: 'Selected Vendor',
//       width: '70%',
//       contentStyle: { 'max-height': '500px', overflow: 'auto' },
//       baseZIndex: 10000,
//       data: {
//         vendor: this.selectedVendor
//       }
//     });
//   }
// } 
export class VendorTableComponent implements OnInit {
  vendor: any[] = [];
  visible: boolean = false;
  checkedVendors: any[] = [];

  @Output() vendorSelected: EventEmitter<any> = new EventEmitter<any>();
  @Input() selectedVendor: any;

  constructor(private vendorService: VendorService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.vendorService.getVendor().subscribe((vendorId: number) => {
      // this.vendorId = vendorId;
    this.getVendorList();
    this.fetchVendors();
  });
  }

  fetchVendors() {
    // Fetch vendors using the VendorService
    this.vendorService.getVendor().subscribe(
      (data) => {
        this.vendor = data;
      },
      (error) => {
        console.error('Error fetching vendors:', error);
      }
    );
  }

  showDialog() {
    this.visible = true;
  }

  getVendorList(): void {
    // Get the list of vendors using the VendorService
    this.vendorService.getVendor().subscribe(
      (response: any) => {
        this.vendor = response;
      },
      (error: any) => {
        console.error('Error getting vendors:', error);
      }
    );
  }


  onSubmit() {
    // Filter the checked vendors
    this.checkedVendors = this.vendor.filter((vendor) => vendor.isChecked);

    if (!this.selectedVendor) {
      return this.selectedVendor;
    }

    // Open a dialog using the DialogService
    const ref = this.dialogService.open(VendorTableComponent, {
      header: 'Selected Vendor',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
      data: {
        vendor: this.selectedVendor
      }
    });
  }
}
