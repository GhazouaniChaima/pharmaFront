import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }


  addUser(
     username : string, fullName :string, phone : number, address : string,
     email : string, password : string, rawPassword : string): Observable<any> {
    return this.http.post(AUTH_API + 'addUser', {
      username,
      fullName,
      phone,
      address,
      email,
      password,
      rawPassword
      
    }, httpOptions);
  }

  

  
}