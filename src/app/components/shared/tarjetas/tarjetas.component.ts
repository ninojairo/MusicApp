import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] =[];
  
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  verArtista( item: any){
    
    let artistaId : string;
    if (item.type === 'album'){
      artistaId = item.artists[0].id;
    }
    else{
      artistaId = item.id;

    }
    console.log(artistaId);

    this._router.navigate(['/artist', artistaId]);



  }

}
