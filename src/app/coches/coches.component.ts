import { Component } from '@angular/core';
import { Coche } from './coche';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent{
  public coche: Coche;
  public coches:Array<Coche>;
  public articulos;

  constructor(
    private _PeticionesService: PeticionesService
   ){
    this.coche = new Coche("","", "","#","");
    this.coches = [
      new Coche("Seat","124", "124","#FFC969","1975"),
      new Coche("Simca","1000", "30","#AABBCC","1923")
    ];
  }

  ngOnInit(){
    this._PeticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        if(!this.articulos){
          console.log("Error en el servidor");
        }
      },
      error => {
        var errorMesage = <any>error;
        console.log(errorMesage);
      }
    );
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche(" "," ","","#"," ");
  }

}