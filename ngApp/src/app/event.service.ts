import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private _eventsUrl = 'http://localhost:3000/api/events';
private _specialEventsUrl = 'http://localhost:3000/api/special';
private _addEventsUrl = 'http://localhost:3000/api/addEvent';
private _addSpecialEventsUrl = 'http://localhost:3000/api/addSpecial';
private _deleteEventsUrl = 'http://localhost:3000/api/deleteEvent';
private _deleteSpecialEventsUrl = 'http://localhost:3000/api/deleteSpecial';

  constructor(private http:HttpClient) { }

  getEvent() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvent() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  getEventById(id : Object) {
    const _url = `${this._eventsUrl}/${id}`;
    return this.http.get<any>(_url);
  }

  getSpecialEventById(id : Object) {
    const _url = `${this._specialEventsUrl}/${id}`;
    return this.http.get<any>(_url);
  }

  addEvent(id : Object){
    return this.http.post<any>( this._addEventsUrl , id )
  }

  addSpecialEvent(id : Object){
    return this.http.post<any>( this._addSpecialEventsUrl , id )
  }

  deleteEvent(id : Object){
    const _url = `${this._deleteEventsUrl}/${id}`;
    return this.http.delete<any>(_url)
  }

  deleteSpecialEvent(id : Object){
    const _url = `${this._deleteSpecialEventsUrl}/${id}`;
    return this.http.delete<any>(_url)
  }
}
