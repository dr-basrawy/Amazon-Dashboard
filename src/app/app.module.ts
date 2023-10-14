
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { SalesByMonthComponent } from './components/dashboard/sales-by-month/sales-by-month.component';
import { LastFewTransactionsComponent } from './components/dashboard/last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from './components/dashboard/sales-by-category/sales-by-category.component';
import { TopThreeProductsComponent } from './components/dashboard/top-three-products/top-three-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { ProductsComponent } from './components/products/products.component';
import { ControlSellerComponent } from './components/control-seller/control-seller.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    OrdersComponent,
    LogInComponent,
    OrderDetailsComponent,
    SalesByMonthComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    TopThreeProductsComponent,
    ProductsComponent,
    ControlSellerComponent,
    CategoryComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
