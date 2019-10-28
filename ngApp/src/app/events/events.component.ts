import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute,Router,Routes } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events=[]
  constructor(private _eventService:EventService,private _router:Router) { }

  onSearch(id : Object) {
    this._eventService.getEventById(id)
    .subscribe(
      res => res,//console.log(res),
      err => console.log(err)
    )
    //console.log(this.eventid)
    this._router.navigate(["events" , id])
  }

  ngOnInit() {
    this._eventService.getEvent()
    .subscribe(
      res => this.events =res,
      err => console.log(err)
    )

    
  }

}
