import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "./auth.service";

export const privateRouteGuard = async () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if(!authService.IsUserLoggedIn()){
        router.navigate(['/home']);
        return;
    }
    return true;
}

export const publicRouteGuard = async () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if(authService.IsUserLoggedIn()){
        router.navigate(['/home']);
        return;
    }
    return true;
}