import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable()
export class SpotifyService {

  constructor(private httpClient:HttpClient) { 
    
  }

  getQuery(url: String){
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAPtNsRA_AAf2d_iMAegzYZpy4gLICK4ED7d9eMCHTh8wlGTyMdXtXiEKXU1XRR7RsgxfHfwe5pWcz29vA'
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

}
