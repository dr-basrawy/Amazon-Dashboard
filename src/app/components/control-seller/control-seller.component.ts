import { Component, OnInit } from '@angular/core';
import { ControlSellerService } from 'src/app/Services/Control-Service/control-seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-seller',
  templateUrl: './control-seller.component.html',
  styleUrls: ['./control-seller.component.scss']
})
export class ControlSellerComponent implements OnInit {
  sellers: any[];

  constructor(private sellerService: ControlSellerService) { }

  ngOnInit() {
    this.loadSellers();
  }

  loadSellers() {
    this.sellerService.getAllSellers().subscribe(
      response => {
        this.sellers = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }


deleteSeller(sellerId: string) {
  Swal.fire({
    title: 'Do you want to delete Seller❔',
    icon: 'question',
    confirmButtonText: 'Delete Seller',
    cancelButtonText: 'Cancel',
    showCancelButton: true
  }).then((res) => {
    if (res.isConfirmed) {
      this.sellerService.deleteSeller(sellerId).subscribe({
       next:(response) => {
          console.log(response);
            Swal.fire({ title: 'Seller deleted', text: 'Seller deleted', icon: 'success' });
            this.loadSellers(); 
        },
       error: (error) => {
          console.log(error);
        }
       } );
    }
  });
}

  // changeStatus(sellerId: string, status: string) {
  //   if (status == 'warning' ) {
  //     this.sellerService.changeStatusToWarning(sellerId, status).subscribe({
  //       next:(res) => {
  //         console.log(res);
  //           this.loadSellers();
  //       },
  //       error:(error) => {
  //         console.log(error);
  //       }
  //   });
  //   }
  //   if (status == 'bloked' ) {
  //     this.sellerService.changeStatusToBlocked(sellerId, status).subscribe({
  //       next:(res) => {
  //         console.log(res);
  //           this.loadSellers();
  //       },
  //       error:(error) => {
  //         console.log(error);
  //       }
  //   });
  //   }
  //   if (status == 'unblocked' ) {
  //     this.sellerService.changeStatusToUnblocked(sellerId, status).subscribe({
  //       next:(res) => {
  //         console.log(res);
  //           this.loadSellers();
  //       },
  //       error:(error) => {
  //         console.log(error);
  //       }
  //   });
  //   }
  // }


changeStatus(event: Event, sellerId: string) {
  const selectedStatus = (event.target as HTMLSelectElement).value;

  if (selectedStatus == 'warning' ) {
    this.sellerService.changeStatusToWarning(sellerId, selectedStatus).subscribe({
      next: (res) => {
        console.log(res);
        this.loadSellers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  if (selectedStatus == 'blocked') {
    this.sellerService.changeStatusToBlocked(sellerId, selectedStatus).subscribe({
      next: (res) => {
        console.log(res);
        this.loadSellers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  if (selectedStatus == 'Active') {
    this.sellerService.changeStatusToUnblocked(sellerId, selectedStatus).subscribe({
      next: (res) => {
        console.log(res);
        this.loadSellers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

}

