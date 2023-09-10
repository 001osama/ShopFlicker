import { Routes } from "@angular/router";

const publicRoutes: Routes = [{
    path: 'public',
    loadComponent: () => 
     import('./public-layout.component').then((c) => c.PublicLayoutComponent),
     children: [
        {
            
        }
     ]
}]