import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    {
        path: 'auth',
        loadComponent: () => 
            import('./auth-layout.component').then((c)=> c.AuthLayoutComponent),
        children: [
            {
                path: 'login',
                loadComponent: () => 
                    import('./login/login.component').then((c)=>c.LoginComponent),
            },
            {
                path: 'signup',
                loadComponent: () => 
                    import('./signup/signup.component').then((c)=>c.SignupComponent),
            },
            {
                path: 'forgetPassword',
                loadComponent: () => 
                    import('./reset-password/reset-password.component').then((c)=>c.ResetPasswordComponent),
            },
            {
                path: 'changePassword',
                loadComponent: () => 
                    import('./change-password/change-password.component').then((c)=>c.ChangePasswordComponent),
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
        ]
    }
];