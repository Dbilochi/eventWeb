import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EventService} from '@services/event.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  displayedColumns: string[] = ['title', 'start', 'end', 'status', 'actions'];
  public dataSource: any;
  constructor(private eventService: EventService, private changeDetectorRefs: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.getUserInvitations();
  }

  getUserInvitations() {
    this.eventService.getUserInvitations().subscribe((res:any) => {
        this.dataSource = res.data;
    })
}

AcceptOrRejectInvite(id:number, status:string){
    this.eventService.updateInvitationStatus(id,status).subscribe((res:any) => {
        this.dataSource = res.data;
        this.changeDetectorRefs.detectChanges();
    })
}

}
