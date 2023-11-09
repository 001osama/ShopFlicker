import { Routes } from '@angular/router';
import { publicRouteGuard } from './services/route-guard';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./components/public-layout/public-layout.routes').then(
            (r)=> r.publicRoutes
        )
    },
    {
        canActivate:[publicRouteGuard],
        path:'auth',
        loadChildren: () => import('./components/auth-layout/auth-layout.routes').then(
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
        path:'emailSent',
        loadComponent:() => import('./shared/email-sent/email-sent.component').then(
            (c)=> c.EmailSentComponent
        ),
    },
    {
        path:'passwordChangeSuccess',
        loadComponent:() => import('./shared/password-change-success/password-change-success.component').then(
            (c)=> c.PasswordChangeSuccessComponent
        ),
    },
    {
        path:'passwordChangeFailed',
        loadComponent:() => import('./shared/password-change-unsuccess/password-change-unsuccess.component').then(
            (c)=> c.PasswordChangeUnsuccessComponent
        ),
    },
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

