import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './app.fruta.component.html',
    styleUrls: ['./app.fruta.component.css']
    
})

export class AppFrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Pera, Naranja, Manzana, Sandia';

  public nombre:string = 'Jose'; // Es mejor declarar la variable y asignarle los valores dentro del constructor.
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajos:Array<any>;
  public dato:string;
  comodin:any = "cualquier cosa";

  constructor(){
    this.trabajos = ['carpintero', '44', 'fontanero', 'electricista', true];
    this.edad  = 46;
    this.mayorDeEdad = true;
    this.comodin = "Vale para poner cualquier cosa";
    console.log(this.trabajos);
  }  
  
  // Aunque se puede llamar a una función dentro del construcor, es una mala práctica. lo mejor es desde : 

  ngOnInit(){                              // Es lo primero que se llama después del constructor.
    this.cambiarNombre();  
    this.cambiarEdad();
    this.holaMundo(this.nombre, this.edad);

     // Variables y alcance
     var uno = 8;
     var dos = 15;

     if (uno === 8) {
       var uno = 3; // Aquí el valor de la variable uno cambia globalmente.
       let dos = 7; // Aquí el valor de la variable dos solo cambia dentro del IF.
       console.log ("Dentro del IF uno es: " + uno + " y dos es: " + dos);
     }
     console.log("Fuera del IF uno es: " + uno + " y dos es: " + dos);
  }

  holaMundo(nombre, edad){
    alert('Hola ' + nombre + ", tienes " + edad +" años.");
    
  }

  cambiarNombre(){
    this.nombre = prompt('Pon el nombre nuevo: ', 'Desconocido');
  }

  cambiarEdad(){
    this.dato = prompt('Pon la edad nueva: ', '18');
    this.edad = parseInt(this.dato);
    if (this.edad < 18) {
      this.mayorDeEdad = false;
    }
  }

}