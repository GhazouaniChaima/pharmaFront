import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { Component,OnInit  } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class NgxRegisterComponent extends NbRegisterComponent {
  showMessages :any;
  
  form: any = {
    username: null,
    email: null,
    password: null,
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  err_messa: string;
  err_username= false;
  
constructor(private authService: AuthService, private nbRegisterComponent:NbRegisterComponent) {
    super(nbRegisterComponent.service,
     nbRegisterComponent.options,
     nbRegisterComponent.cd,
     nbRegisterComponent.router,);
    }
   


  ngOnInit(): void {
  }
  
  onSubmit(): void {
    console.log(this.form);
    const { username, email, password} = this.form;
    console.log(username);
   

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  
  test_err(id,event){
    if(id ==='username'){
      if(this.user.username === undefined ||this.user.username === '' ){
        this.err_messa='required'
        this.err_username= true
        console.log('errrrrrrrrrrr');
      }else {this.err_username= false}
    }
  }
}
