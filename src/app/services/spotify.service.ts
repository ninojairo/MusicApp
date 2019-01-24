import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class SpotifyService {

  constructor(private httpClient:HttpClient) { 
    
  }

  getQuery(url: String){
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCl3PjSgcgtEw8BD4tfxfAD-r9Sn-gDvcM7s39hIPqJiWw8zGslSRfxwSLOJ5RjLAudio2Rwvn0IHfQOTg'
    })
    return this.httpClient.get(`https://api.spotify.com/v1/${url}`,{headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data=>{return data['albums'].items}));

    //return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe(map(data=>{return data['albums'].items}));
  }

  searchArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data=>{return data['artists'].items}));

  }

  queryArtist(artistaId: any){
    return this.getQuery(`artists/${artistaId}`)

  }

  getTopTracks(artistaId: string){
    return this.getQuery(`artists/${artistaId}/top-tracks?country=us`).pipe(map(data=>{return data['tracks']}));

  }

}
