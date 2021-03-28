import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

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

logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }
}
