import { Routes } from '@angular/router';
import { publicRouteGuard } from './services/route-guard';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./components/public-layout/public-layout-routing').then(
            (r)=> r.publicRoutes
        )
    },
    {
        canActivate:[publicRouteGuard],
        path:'auth',
        loadChildren: () => import('./components/auth-layout/auth-layout-routing').then(
            (c)=> c.authRoutes
        )
    },
    {
        path:'success',
        loadComponent:() => import('./shared/payment-successful/payment-successful.component').then(
            (c)=> c.PaymentSuccessfulComponent
        ),
    },
    {
        path:'unsuccess',
        loadComponent:() => import('./shared/payment-unsuccessful/payment-unsuccessful.component').then(
            (c)=> c.PaymentUnsuccessfulComponent
        ),
    },
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

