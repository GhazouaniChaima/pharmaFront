import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../data/user';


@Injectable()
export class UserService extends UserData {

  private user = {
    nick: { name: 'Farah Maghraoui', picture: 'assets/images/useer.png' },
  };
  getUser(): Observable<any> {
    return observableOf(this.user);
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
   }) 
  };

  private baseUrl = 'http://localhost:8080/api/users';


  constructor(private httpClient: HttpClient) {
    super();
  }
 

  getUserList(): Observable<any> {
    return this.httpClient.get<User[]>(this.baseUrl,this.httpOptions).pipe(
      map(response => response)
    );
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, data,this.httpOptions)
  }

  getUserById(id : any): Observable<User>
  {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`,this.httpOptions) 
  }

  activateUser(id: any): Observable<any> 
  {
      return this.httpClient.put(`${this.baseUrl}/activate/${id}`,this.httpOptions)
  }

  deactivateUser(id: any): Observable<any> 
  {
    return this.httpClient.put(`${this.baseUrl}/deactivate/${id}`,this.httpOptions)
  }
}

