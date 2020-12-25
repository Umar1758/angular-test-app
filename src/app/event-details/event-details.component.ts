import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {ApiService} from '../api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public events:Array<object> = [];
  public artist: any = {};

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEvents(this.route.snapshot.params.name, this.route.snapshot.params.date)
  }
  trackByFn(){

  }
  getEvents = (artist, date) => {
    this.api.getArtistEvents(artist, date).subscribe(res => {
      this.events = res;
      this.artist = res[0].artist
    })
  }

}
