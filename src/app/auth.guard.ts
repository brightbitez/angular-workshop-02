import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ):boolean{
      const param = route.params.name;
      if(!param){
        return true;
      } else{
        this.router.navigate(['login'], {
            queryParams: {returnUrl: state.url},
        });
      }
    return false;
  }
  
}
