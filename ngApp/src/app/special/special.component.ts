import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  specialEvents=[]
  constructor(private _specialEventService:EventService, private _router : Router) { }

  onSearch(id : Object) {
    this._specialEventService.getSpecialEventById(id)
    .subscribe(
      res => res,//console.log(res),
      err => console.log(err)
    )
    //console.log(this.eventid)
    this._router.navigate(["special" , id])
  }

  ngOnInit() {
    this._specialEventService.getSpecialEvent()
    .subscribe(
      res => this.specialEvents =res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
