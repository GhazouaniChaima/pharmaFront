import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../@core/data/user';
import { UserService } from '../../../../@core/mock/users.service';
@Component({
  selector: 'ngx-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User = new User();

  isSuccessful = false;
 
  constructor(private service: UserService,  private route: ActivatedRoute,
    private router: Router) { }
  
 
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log("ID "+this.id);
    this.service.getUserById(this.id).subscribe(data=> {
      this.user = data;
    }, error => console.log(error));
  }

  onEditConfirm(){
    this.service.updateUser(this.id, this.user).subscribe( data =>{
     // this.goToUserList();
     this.isSuccessful = true;
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
}