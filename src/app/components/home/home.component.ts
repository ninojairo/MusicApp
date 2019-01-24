import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases : any[] = [];
  loading: boolean = true;

  constructor(private spotifyService: SpotifyService) { 
    this.spotifyService.getNewReleases().subscribe((data:any)=>{
      console.log(data);
      this.newReleases = data;
      this.loading=false;
    });



  }

  ngOnInit() {
  }

}
