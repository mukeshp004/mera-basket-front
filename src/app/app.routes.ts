import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductComponent } from './pages/product/product/product.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AccountComponent } from './pages/account/account.component';
import { OrderComponent } from './pages/account/order/order.component';
import { SettingComponent } from './pages/account/setting/setting.component';
import { AddressComponent } from './pages/account/address/address.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  // {
  //     path: 'login',
  //     component: LoginComponent
  // },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '404-error',
        component: PageNotFoundComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'products',
        component: ProductComponent,
      },

      {
        path: 'product-detail',
        component: ProductDetailComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
        children: [
          {
            path: 'order',
            component: OrderComponent,
          },
          {
            path: 'setting',
            component: SettingComponent,
          },
          {
            path: 'address',
            component: AddressComponent,
          },
        ],
      },
      
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];
