import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbLoginComponent, NbRegisterComponent } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';



import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxRegisterComponent } from './register/register.component';
import { NgxLoginComponent } from './login/login.component'; 
import { AuthService } from '../@core/mock/auth.service';
import { TokenStorageService } from './_services/token-storage.service';
import { AuthGuard } from './_helpers/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    NbEvaIconsModule,
    NbIconModule,
   
    HttpClientModule,
  ],
  declarations: [
    NgxLoginComponent, 
    NgxRegisterComponent,
    AuthComponent,
   
  ]
  ,  providers: [
    AuthService,
    NbRegisterComponent,
    NbLoginComponent,
    TokenStorageService,
    AuthGuard,
  ],

  
  
})
export class NgxAuthModule {
}