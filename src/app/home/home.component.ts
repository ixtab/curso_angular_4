import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent{
  public titulo = "Página principal";

  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  public fecha;
  public num_exp:string;

  constructor(
    private _ropaService: RopaService
  ){
      this.fecha = new Date(1971, 2, 5, 17,5);
  }

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}