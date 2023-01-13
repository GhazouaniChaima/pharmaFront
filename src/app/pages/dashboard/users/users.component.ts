import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { UserData } from '../../../@core/data/users-data';
import { User } from '../../../@core/data/user';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  
  users: User[] = [];
  constructor(private userService: UserData, private router: Router) {


    this.userService.getUserList().subscribe(

      data => {
        this.users = data;
        //console.log("Get Users" + this.users);
        
      }

    )
  }

  routerAdd() {
    this.router.navigate(['/pages/addUser'])
  }


  routerUpdate(id: number) {
    this.router.navigate(['/pages/updateUser', id]);
  }

 


  onActivateConfirm(id): void {
    if (window.confirm("Êtes-vous sûr d'activer ce utilisateur")) {
      //call to remote api, remember that you have to await this
      console.log("1:"+id);
      this.activateUser(id);
      id.confirm.resolve(id);
    } else {
      id.confirm.reject();
    }
  }

  onDeactivateConfirm(id): void {
    if (window.confirm("Êtes-vous sûr de déactiver ce utilisateur")) {
      //call to remote api, remember that you have to await this
      console.log("1:"+id);
      this.deactivateUser(id);
      id.confirm.resolve(id);
    } else {
      id.confirm.reject();
    }
  }


  //Functions//
  activateUser(id: any) {
    console.log("2:"+id);
    this.userService.activateUser(id).
      subscribe((result) => { console.warn(result) })
  }

  deactivateUser(id: any) {
    console.log("2:"+id);
    this.userService.deactivateUser(id).
      subscribe((result) => { console.warn(result) })
  }
  
  }