import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class EventInfo {
  public EventId: string;
  public EventName: string;
  public EventPlace: string;
  public EventDate: string;
  public EventDescription: string;
  public EventPicture: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<EventInfo[]> {
    return this.http.get<EventInfo[]>('https://1b614giu52.execute-api.us-east-1.amazonaws.com/staging/event/getall');
  }
}
