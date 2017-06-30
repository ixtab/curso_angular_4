import { Component } from '@angular/core';

 @Component({                           
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
                                         
export class AppComponent {
  title = 'Webapp de Angular 4 con Angular CLI';
}

/* 

@Component es un decorador y aporta características extra a las clases y condicionan el comportamiento de las mismas dependiendo de los metadatos o propiedades que tengan. Este decorador modifica la calse AppComponent. 

Los Metadatos en los decoradores son propiedades que aportan características extra a las clases y describen relaciones entre ellas, por ejemplo si tenemos un componente y una plantilla el metadato se va a encargar de decirle a Angular que ese componente y esa plantilla van juntos.

selector: es una propiedad que tiene el decorador, y aquí indicamos que etiqueta vamos a utilizar para cargar el componente. Entonces en idex.html tenemos una etiqueta como <app-root></app-root>

templateURL: Es otra propiedad que nos permite asignarl una vista o una platilla en un fichero html y nos va a permitir pasar a esa vista la información que tenemos guardada dentro de la clase del componente

styleUrls: ficheros css para ese componente.

*/