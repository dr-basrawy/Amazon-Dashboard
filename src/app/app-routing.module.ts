import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './components/coupens/coupens.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { adminGuardGuard } from './Guards/admin-guard.guard';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { ControlSellerComponent } from './components/control-seller/control-seller.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent ,canActivate: [adminGuardGuard] , title:"Dashboard"},
  {path: 'pages', component: PagesComponent ,canActivate: [adminGuardGuard] , title:"Pages"},
  {path: 'media', component: MediaComponent ,canActivate: [adminGuardGuard] , title:"Media"},
  {path: 'settings', component: SettingsComponent ,canActivate: [adminGuardGuard] , title:"Settings"},
  {path: 'orders', component:OrdersComponent,canActivate: [adminGuardGuard] , title:"Orders"},
  {path: 'order-details/:id', component: OrderDetailsComponent ,canActivate: [adminGuardGuard] , title:"Order Details"},
  {path: 'sellers', component: ControlSellerComponent ,title:"Sellers" ,canActivate: [adminGuardGuard]},
  {path:'products',component:ProductsComponent ,canActivate: [adminGuardGuard] , title:"Products"},
  {path:'products/:id',component:ProductsComponent ,canActivate: [adminGuardGuard] , title:"Products Update"},
  {path:'category',component:CategoryComponent ,canActivate: [adminGuardGuard] , title:"Category"},
  {path:'category/:id',component:CategoryComponent ,canActivate: [adminGuardGuard] , title:"Category Update"},
  {path: 'login', component: LogInComponent , title:"Login"},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
