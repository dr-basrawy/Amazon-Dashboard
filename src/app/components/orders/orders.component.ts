import { Component, OnInit } from '@angular/core';
import { OrderSevicesService } from '../../Services/orderSevices/order-sevices.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
   orders: any =[] ;
   constructor(private route:Router,    private orderSevicesService: OrderSevicesService    ){
    
    
   }
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    
    this.orderSevicesService.getAllProducts().subscribe(
      data =>{
        this.orders=[...Object.values(data)][0];
      }
    );
  }
  details(id:string){
    this.route.navigateByUrl('/order-details/' + id);
  }
  totalprice(t:any[]){
    let sum =0
    for (let i of t ){
      sum+=i.product.price.new*i.quantity;
      
  }
  return sum
}
items(t:any[]){
  let items=0
  for (const i of t) {
    items+=i.quantity
  }
  return items
}

delete(id: string) {
  Swal.fire({
    title: 'Delete order!',
    text: 'Do you want to delete order',
    icon: 'question',
    confirmButtonText: 'Delete Order',
    cancelButtonText: 'Cancel',
    showCancelButton: true
  }).then((res) =>{
    if(res.isConfirmed){
      this.orderSevicesService.deleteById(id).subscribe(res=>{
        console.log(res);
        Swal.fire({title:'Order deleted!',text:"Order deleted", icon:'success'});
        this.getAllOrders();
      })
    }
  })
  // Swal.fire("Good job!", `id: ${id}`, "success")
  // swal("Good job!", `id: ${id}`, "success");

}
updateById(id:string){
  console.log(id);
  this.orderSevicesService.updateById(id).subscribe(res=>{
    console.log(res);
    Swal.fire({title:'Update statue!',text:"Order Completed", icon:'success'});
    this.getAllOrders();
  })

}
   
}
