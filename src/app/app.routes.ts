import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent 
            },
            // {
            //     path: 'products',
            //     component: ProductsComponent 
            // },
            {
                path: 'checkout',
                component: CheckoutComponent 
            }
        ]
    }

];