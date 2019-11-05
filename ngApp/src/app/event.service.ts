import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _baseUrl = "http://3.83.55.183:3000/api";

private _eventsUrl = `${this._baseUrl}/events`;
private _specialEventsUrl = `${this._baseUrl}/special`;
private _addEventsUrl = `${this._baseUrl}/addEvent`;
private _addSpecialEventsUrl = `${this._baseUrl}/addSpecial`;
private _deleteEventsUrl = `${this._baseUrl}/deleteEvent`;
private _deleteSpecialEventsUrl = `${this._baseUrl}/deleteSpecial`;

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
