import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./components/public-layout/public-layout-routing').then(
            (r)=> r.publicRoutes
        )
    },
    {
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

