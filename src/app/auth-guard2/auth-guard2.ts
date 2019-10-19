import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import AppServices from '../services/app-services.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard2 implements CanActivate {
  constructor(private appService: AppServices) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.appService.isLoggedIn.value;
    if (!user) {
      return true;
    }
    return false;
  }
}
