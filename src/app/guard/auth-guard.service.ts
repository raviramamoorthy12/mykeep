import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: RouterService) { }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const booleanPromise = this.authService.isUserAuthenticated();
    return booleanPromise.then((authenticated) => {
      if (!authenticated) {
        this.router.navigateToLogin();
        console.log(authenticated);
      }
      return authenticated;
    });


  }

}
