import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/shared/header/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SignInComponent } from './components/shared/header/sign-in/sign-in.component';
import { OrdersComponent } from './components/orders page/orders.page.component';
import { CreateProductComponent } from './components/dashboard/create-product/create-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { receiptComponent } from './components/orders page/receipt/receipt.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';
import { BlogComponent } from './components/shared/header/blog/blog.component';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './components/shared/header/about-us/about-us.component';
import { OrdereditemComponent } from './components/orders page/ordereditem/ordereditem.component';
import { CartComponent } from './components/shared/header/cart/cart.component';
import { CartService } from './services/cart.service';
import { AdminControlsComponent } from './components/dashboard/admin-controls/admin-controls.component';
import { AdminDisplayComponent } from './components/dashboard/admin-display/admin-display.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AdminService } from './services/admin.service';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { LoginService } from './services/login.service';
import { OrdersService } from './services/orders.service';

////////// ellly 3amlllll error -_-
import { HomeComponent } from './components/home/home.component';
import { SliderBriefComponent } from './components/home/1stsectionSlider/slider-brief.component';
import { ShoppingListComponent } from './components/home/2ndsectionShopping/shopping-list.component';
import { BgReviewComponent } from './components/home/3rdsectionBackground/bg-review.component';
// import { RatingEventsComponent } from './components/home/2ndsectionShopping/rating-events/rating-events.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductsComponent,
    FooterComponent,
    CreateProductComponent,
    ProfileComponent,
    receiptComponent,
    EditProductComponent,
    OrdersComponent,
    OrdereditemComponent,
    RegistrationComponent,
    BlogComponent,
    SignInComponent,
    AboutUsComponent,
    HeaderComponent,
    CartComponent,
    AdminControlsComponent,
    AdminDisplayComponent,
    DashboardComponent,
    ProductdetailsComponent,
    ////////elly 3aml error -_-
    HomeComponent,
    SliderBriefComponent,
    ShoppingListComponent,
    BgReviewComponent,
    // RatingEventsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  providers: [
    ProductsService,
    JwtService,
    AuthService,
    CartService,
    AdminService,
    LoginService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
