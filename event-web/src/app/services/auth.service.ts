import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {first, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signIn(email: string, password: string): Observable<any>{
    const body={
        email,
        password
    }
 return this.httpClient.post(environment.apiURL+'login',body).pipe(map((res:any)=>{
    localStorage.setItem('access_token', res.auth_token);
    localStorage.setItem('user_name', res.name);
    
 }))
}

isLoggedIn(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    return false;
  }
}
