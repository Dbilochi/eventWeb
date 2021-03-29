import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { EventService } from '@services/event.service';
import { AuthService } from '@services/auth.service';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;
    view: CalendarView = CalendarView.Month;
    CalendarView = CalendarView;
    viewDate: Date = new Date();
    modalData?: {
        event: CalendarEvent;
    };

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [];

    activeDayIsOpen: boolean = true;

    constructor(
        private eventService: EventService,
        private authService: AuthService,
        private modal: NgbModal) { }

    ngOnInit(): void {
        this.getUserInvitations()
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd,
    }: CalendarEventTimesChangedEvent): void {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return {
                    ...event,
                    start: newStart,
                    end: newEnd,
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }

    getUserEvents() {
        this.eventService.getUserEvents().subscribe((res => {
            this.mapResToCalendarEvent(res)
        }))
    }

    logout() {
        this.authService.logout();
    }

    getUserInvitations() {
        this.eventService.getUserInvitations().subscribe((res => {
            this.mapResToCalendarEvent(res)
        }))
    }

    onTabClick(event: any) {
        if (event.tab.textLabel == 'Invitations') {
            this.getUserInvitations()
        }
    }

    mapResToCalendarEvent(res: any) {
        for (let i = 0; i < res.data.length; i++) {
            res.data[i].start = new Date(res.data[i].start)
            res.data[i].end = new Date(res.data[i].end)
            this.events.push(res.data[i])
        }
    }

}



