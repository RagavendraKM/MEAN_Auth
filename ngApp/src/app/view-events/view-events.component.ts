import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { FileUploader, FileSelectDirective, FileItem, FileDropDirective } from 'ng2-file-upload';
import { Router } from '@angular/router';

const _url = 'http://localhost:3000/api/imgUpload';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  url = (window.location.href).split('/');
  eventid = this.url[this.url.length - 1];

  constructor(private _eventService: EventService, private _router: Router) { }

  async onDelete(id: Object) {
    if (location.href.includes("events")) {
      await this._eventService.deleteEvent(id).subscribe(
        res => {
          console.log(res);
          alert("Deleted")
        },
        err => console.log(err)
      )
      this._router.navigate(['/events']);
    } else if (location.href.includes("special")) {
      await this._eventService.deleteSpecialEvent(id).subscribe(
        res => {
          console.log(res);
          alert("Deleted")
        },
        err => console.log(err)
      )
      this._router.navigate(['/special']);
    }
    //location.reload();
  }

  ngOnInit() {
    this._eventService.getEventById(this.eventid).subscribe(
      res => {
        this.eventid = res
        res.eventGallery = res.eventGallery.split('\\')[res.eventGallery.split('\\').length - 1]
        //console.log(res) 
      },
      err => console.log(err)
    )
    console.log(this.eventid)

    this._eventService.getSpecialEventById(this.eventid).subscribe(
      res => {
        this.eventid = res;
        res.eventGallery = res.eventGallery.split('\\')[res.eventGallery.split('\\').length - 1]
      },
      err => console.log(err)
    )
  }
}
