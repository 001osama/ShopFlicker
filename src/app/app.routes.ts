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
            (r)=> r.authRoutes
        )
    },
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

