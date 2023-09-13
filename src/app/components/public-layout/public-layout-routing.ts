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
            path: 'about',
            loadComponent: () => 
               import('./about/about.component').then((c)=> c.AboutComponent)
        },   
        {
            path: 'contact',
            loadComponent: () => 
               import('./contact/contact.component').then((c)=> c.ContactComponent)
        },   
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },   
     ]
}]