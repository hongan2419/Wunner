import { Component, OnInit } from '@angular/core';
import { EventInfoService, EventInfo} from '../event-info.service'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {
  public events: EventInfo[] = [];
  constructor(private eventService: EventInfoService) { }
  
  ngOnInit() {
    this.eventService.getAll().subscribe(events => {this.events = events;console.log(this.events);});
  }

}
