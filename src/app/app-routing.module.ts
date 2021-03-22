import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/////// USER or GUEST components
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

////ellly 3aml errorororor
import { HomeComponent } from './components/home/home.component';

// //////header components
import { RegistrationComponent } from './components/shared/header/registration/registration.component';
import { SignInComponent } from './components/shared/header/sign-in/sign-in.component';
import { CartComponent } from './components/shared/header/cart/cart.component';
import { BlogComponent } from './components/shared/header/blog/blog.component';
import { AboutUsComponent } from './components/shared/header/about-us/about-us.component';
// ///////////////////
// /////// USER ONLY components
import {receiptComponent} from './components/orders page/receipt/receipt.component';
import { OrdersComponent } from './components/orders page/orders.page.component';
import { ProfileComponent } from './components/profile/profile.component';
//// admin components
import { CreateProductComponent } from './components/dashboard/create-product/create-product.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
////////////////
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes = [
  {path:'products',component:ProductsComponent,canActivate: [AuthGuard] },
  { path:'login',component:SignInComponent },
  { path:'register',component:RegistrationComponent },
  {path:'receipt', component:receiptComponent,canActivate: [AuthGuard] },
  { path:'search', component:SearchBarComponent,canActivate: [AuthGuard]  },
  { path: 'orders', component: OrdersComponent,canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard] },
  { path: 'blog', component: BlogComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'products/:id', component:ProductdetailsComponent },
  { path: 'cart', component: CartComponent,canActivate: [AuthGuard] },
   
  /////elly 3aml errororor -_-
  { path:'', component: HomeComponent },
  { path: 'home', component: HomeComponent},

  ///Admin Components
  { path: 'editproduct/:id', component: EditProductComponent,canActivate: [AdminGuard] },
  { path: 'createproduct', component: CreateProductComponent ,canActivate: [AdminGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AdminGuard] },
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
