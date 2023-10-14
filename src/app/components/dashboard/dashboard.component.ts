import { Component, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/Models/product';
import { ControlSellerService } from 'src/app/Services/Control-Service/control-seller.service';
import { ProductsService } from 'src/app/Services/products/products.service';
import { OrderSevicesService } from 'src/app/Services/orderSevices/order-sevices.service';
import { ReviewsService } from 'src/app/Services/reviews/reviews.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  sellers: any[] = [];
  products: any[] = [];
  orders: any=[];
  reviews: any[] = [];
  countReviws: number = 0;
  countOrders: number = 0;
  countSeller: number = 0;
  countProduct:number = 0;
  constructor(private productService: ProductsService, private sellerService: ControlSellerService, private OrderSevice:OrderSevicesService, private reviewsService:ReviewsService) {}
  
  ngOnInit(): void {
    this.sellerService.getAllSellers().subscribe({
      next: (response) => {
        this.sellers = response.data;
        this.countSeller = this.sellers.length; 
        console.log(this.sellers);
        console.log(this.countSeller);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.productService.getAllProducts().subscribe({
      next:(data) =>{
        this.products=[...Object.values(data)][0];
        this.countProduct = this.products.length; 
      },
      error: (error) => {
        console.log(error);
      }
  });

    this.OrderSevice.getAllProducts().subscribe({
      next:(data) =>{
        this.orders=[...Object.values(data)][0];
        this.countOrders = this.orders.length; 
      },
      error: (error) => {
        console.log(error);
      }
  });

     this.reviewsService.getAllReviews().subscribe({
      next:(data) =>{
        this.reviews=[...Object.values(data)][0];
        this.countReviws = this.reviews.length; 

      },
      error:(error)=>{
        console.log(error);
      }
      
    })
  }


}