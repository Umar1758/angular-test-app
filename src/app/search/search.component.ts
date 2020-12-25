import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public artists: any = {};
  public search: string = '';
  public searchClicked:boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSearch = () => {
    this.api.getArtistBySearch(this.search).subscribe(res => {
      this.searchClicked = true;
      this.artists = res;
    })
  }
}
