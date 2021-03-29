import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getUserEvents(){
    let userID = localStorage.getItem('user_id')
    return this.http.get(environment.apiURL+'user/'+userID+'/events')
  }

  getUserInvitations(){
    let userID = localStorage.getItem('user_id')
    return this.http.get(environment.apiURL+'user/'+userID+'/invitations')
  }
}
