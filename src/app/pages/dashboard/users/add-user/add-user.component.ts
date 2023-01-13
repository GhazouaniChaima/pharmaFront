import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../_services/users.service';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  form: any = {
    
    username : null, fullName : null, phone : null, address : null, email : null, password : null, rawPassword : null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, fullName, phone, address, email, password, rawPassword } = this.form;

    this.usersService.addUser(username, fullName , phone , address ,
      email , password , rawPassword ).subscribe(
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
}

