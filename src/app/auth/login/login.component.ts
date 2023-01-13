import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
//import { LocalStorage } from '@ngx-pwa/local-storage';
import { TokenStorageService } from '../../@core/mock/token-storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  version = 'v10.19.0';
  owner: string = 'PharmaTunisie';
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

 
    constructor(private authService: AuthService, private nbLoginComponent:NbLoginComponent,private tokenStorage: TokenStorageService) {
      super(nbLoginComponent.service,
        nbLoginComponent.options,
        nbLoginComponent.cd,
        nbLoginComponent.router,);
      }


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
    
  }

  onSubmit(): void {
    console.log(this.form);
    const { username, password } = this.form;
    
    this.authService.login(username, password).subscribe(
      data => {
        
       // this.tokenStorage.saveToken(data.accessToken);
       // this.tokenStorage.saveUser(data.token);

       //console.log(data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.roles = this.tokenStorage.getUser().roles;

       localStorage.setItem('token', data.accessToken);
     
        this.router.navigate(['/pages']);
       // this.reloadPage();
       // console.log(data.token);
       

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
