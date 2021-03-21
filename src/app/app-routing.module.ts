import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/////// USER or GUEST components
// import { HomeComponent } from './components/home/home.component';
// import { ProductsComponent } from './components/products/products.component';
// import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
// import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
// import { BuyNowComponent } from './components/home/1stsectionSlider/buy-nowBtn/buy-now.component';
// //////header components
import { RegistrationComponent } from './components/shared/header/registration/registration.component';
import { SignInComponent } from './components/shared/header/sign-in/sign-in.component';
// import { CartComponent } from './components/shared/header/cart/cart.component';
// import { BlogComponent } from './components/shared/header/blog/blog.component';
// import { AboutUsComponent } from './components/shared/header/about-us/about-us.component';
// ///////////////////
// //// import { ReadMoreComponent } from './components/home/4thsectionreview/read-more/read-more.component';
// /////// USER ONLY components
// import {receiptComponent} from './components/orders page/receipt/receipt.component';
// import { OrdersComponent } from './components/orders page/orders.page.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { SearchresultComponent } from './components/search/search-bar/searchresult/searchresult.component';
//// admin components
import { CreateProductComponent } from './components/dashboard/create-product/create-product.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
////////////////
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes = [
  // {path:'', component: HomeComponent },
  // {path:'products',component:ProductsComponent,canActivate: [AuthGuard]},
  { path:'login',component:SignInComponent },
  { path:'registration',component:RegistrationComponent },
  // {path:'signin', component:SignInComponent},
  // {path:'receipt', component:receiptComponent,canActivate: [AuthGuard] },
  // { path:'search', component:SearchBarComponent },
  // { path: 'home', component: HomeComponent},
  // { path: 'blog', component: BlogComponent },
  // // { path: 'readmore', component: ReadMoreComponent },
  // { path: 'orders', component: OrdersComponent },
  // { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},//canActivate: [AuthGuard]
  // { path: 'buynow', component: BuyNowComponent },
  // { path: 'searchresult', component: SearchresultComponent },
  // { path: 'aboutus', component: AboutUsComponent },
  // { path: 'products/:id', component:ProductdetailsComponent },
  // { path: 'orders', component: CartComponent }, 

  // ///Admin Components
  // { path: 'editproduct', component: EditProductComponent ,canActivate: [AuthGuard,AdminGuard]},
  // { path: 'createproduct', component: CreateProductComponent,canActivate: [AuthGuard,AdminGuard] },
  // { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard,AdminGuard] },

    ///Admin Components
    { path: 'editproduct', component: EditProductComponent },
    { path: 'createproduct', component: CreateProductComponent },
    { path: 'dashboard', component: DashboardComponent },
]
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
