import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
    
})

export class EmpleadoComponent {
  public titulo_empleados = 'Componente Empleados:';

  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;

  constructor(){
    this.empleado = new Empleado('David Lopez', 27, 'Electricista', true);
    this.trabajadores = [
      new Empleado('Juan Garcia', 27, 'Fontanería', false),
      new Empleado('Pedro Perez', 42, 'Carpintería', true),
      new Empleado('Maria Sarmiento', 58, 'Cocina', false),
      new Empleado('Igarne Pagatzaurtunduagoienengoa', 23, 'Cocina', true)
    ];
    this.trabajador_externo = false;
    this.color = '#ff00ff';
  }

  ngOnInit(){
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }
}