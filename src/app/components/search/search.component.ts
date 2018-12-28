import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists : any[] = [];

  constructor(private _spotifyService : SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(termino: string){
    console.log(termino);
    this._spotifyService.searchArtist(termino).subscribe((data: any)=>{
      console.log(data);
      this.artists = data;

    })



  }

}
