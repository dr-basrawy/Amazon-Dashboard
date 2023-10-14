import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderSevicesService } from 'src/app/Services/orderSevices/order-sevices.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{
  public details: Order | null = null;
  public totalPrice: number = 0;
  totalitems:number=0
  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderSevicesService){}

  ngOnInit(): void {
    this.orderService.getPrdByID(this.activatedRoute.snapshot.params['id']).subscribe((res:{data:Order})=>{
      console.log("resullt from d",res);
      this.details = res.data;
      this.details.products.forEach(product=>{
        this.totalPrice += product?.product?.price?.new*product.quantity;
        this.totalitems+=product?.quantity

      });
    })
  }
  items(t:any){

    // this.totalitems+=t
  }
  
}
