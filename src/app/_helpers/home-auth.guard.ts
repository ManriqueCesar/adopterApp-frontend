import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class HomeAuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['login']);
            return false;
        } else {
           // this.router.navigate(['organizacion']);
            return true;
        } 
    }
}