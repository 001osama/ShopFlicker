import { Routes } from "@angular/router";

export const publicRoutes: Routes = [{
    path: '',
    loadComponent: () => 
     import('./public-layout.component').then((c) => c.PublicLayoutComponent),
     children: [
         {
             path: 'home',
             loadComponent: () => 
                import('./home/home.component').then((c)=> c.HomeComponent)
        },   
        {
            path: 'products',
            loadComponent: () => 
                import('./products/products.component').then((c)=> c.ProductsComponent)
        },   
        {
            path: 'about-us',
            loadComponent: () => 
               import('./about-us/about-us.component').then((c)=> c.AboutUsComponent)
        },   
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },   
     ]
}]