import { Component, OnInit } from '@angular/core';
import { EventService} from '@services/event.service';
import { AuthService} from '@services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
      private eventService: EventService,
      private authService: AuthService) { }

  ngOnInit(): void {
      this.getUserEvents()
  }

  getUserEvents(){
      this.eventService.getUserEvents().subscribe((res =>{
          console.log('res--', res)
      }))
  }

  logout() {
    this.authService.logout();
}

}
