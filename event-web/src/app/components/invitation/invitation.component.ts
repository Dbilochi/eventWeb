import { Component, Input, OnInit } from '@angular/core';
import { EventService} from '@services/event.service';


@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
 @Input() invitations: any
  constructor(private eventService: EventService) { console.log('my inviatsion--', this.invitations)}

  ngOnInit(): void {
      
  }

}
