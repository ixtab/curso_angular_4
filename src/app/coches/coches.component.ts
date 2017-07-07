import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent{
  public coche: Coche;
  public coches:Array<Coche>;

  constructor(){
    this.coche = new Coche("","", "","#","");
    this.coches = [
      new Coche("Seat","124", "124","#FFC969","1975"),
      new Coche("Simca","1000", "30","#AABBCC","1923")
    ];
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche(" "," ","","#"," ");
  }

}