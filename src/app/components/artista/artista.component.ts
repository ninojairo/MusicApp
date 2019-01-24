import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artistaId: string;
  artista:any ={};
  artistTopTracks:any[] =[];

  artistaCargado: boolean= false;


  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { 
    this._activatedRoute.params.subscribe(params=>{
      console.log(params.id);
      this.artistaId = params.id;
      this.verArtista(this.artistaId);
      this.getTopTracks(this.artistaId);

    })


  }

  ngOnInit() {
  }

  verArtista(artistaId: string){
    this._spotifyService.queryArtist(artistaId).subscribe(artista=>{
      console.log(artista);
      this.artista = artista;
      this.artistaCargado= false;
    })
  }

  getTopTracks(artistaId: string){

    //let artistTopTracks:any[] =[];

    this._spotifyService.getTopTracks(artistaId).subscribe(topTracks=>{
      console.log(`getTopTracks`);
      console.log(topTracks);
      this.artistTopTracks = topTracks;
    })


  }

}
