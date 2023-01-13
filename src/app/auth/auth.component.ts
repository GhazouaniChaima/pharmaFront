import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'ngx-register',
  template: `<router-outlet></router-outlet>`,
})
export class AuthComponent extends NbAuthComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private nbAuthComponent : NbAuthComponent) {
    
    super(nbAuthComponent.auth,nbAuthComponent.location);
   }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
