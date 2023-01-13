import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
 constructor( private routes: Router, private auth : AuthService){}
  canActivate(){

if (this.auth.isLoggedIn()){
  return true;
}
alert('you have not logged In')
this.routes.navigate(['auth/login']); 
return false;
  }
}

