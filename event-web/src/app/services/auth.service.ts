import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {first, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any>{
    const body={email,password}
    return this.http.post(environment.apiURL+'login',body).pipe(map((res:any)=>{
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('user_name', res.username);
        localStorage.setItem('user_id', res.user_id);
    }))
}

signUpUser(name: string,email: string, password: string){
    const body = { user:{name,email,password}   }
    return this.http.post(environment.apiURL + 'register', body)
}

isLoggedIn(): boolean {
    if (localStorage.getItem('access_token')) {
        return true;
    }
    return false;
    }
}
