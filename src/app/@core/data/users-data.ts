import { Observable } from 'rxjs';
import { User } from "./user";

export abstract class UserData {
  abstract getUser(): Observable<User[]>;
  abstract getUserList(): Observable<User[]>;
  abstract updateUser(id : any , data : any): Observable<any>;
  abstract getUserById(id: any) : Observable<any> ;
  abstract activateUser(id : any): Observable<any>;
  abstract deactivateUser(id : any): Observable<any>;

}
