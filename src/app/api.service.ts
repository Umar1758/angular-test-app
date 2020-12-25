import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient) { }
  getArtistBySearch = (searchQuery: string) => {
    return this.http.get<any>(`https://rest.bandsintown.com/artists/${searchQuery}?app_id=abc`).pipe(map(artists => {
      return artists;
    }))
  }
  getArtistEvents = (name: string, date: string) => {
    return this.http.get<any>(`https://rest.bandsintown.com/artists/${name}/events?app_id=abc&date=${date}`).pipe(map(events => {
      return events;
    }))
  }
}
