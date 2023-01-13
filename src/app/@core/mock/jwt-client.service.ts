import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private httpClient: HttpClient) { }

  public generateToken(request) {
    return this.httpClient.post<string>("localhost:8080/authenticate", request, {  responseType: 'text' as 'json' });
  }

  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("localhost:8080/", {headers, responseType: 'text' as 'json' });
  }
}
