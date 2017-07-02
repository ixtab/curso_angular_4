## Hay comentarios en:

  - src/app/app.component.ts
  - app.component.html
  - app.module.ts
  - app.fruta.component.ts
  ___

# Elementos que conforman Angular

### COMPONENTES

Un componente al final va a controlar un trozo de pantalla o de la vista. 

Todo lo que se puede ver en pantalla es controlado y gestionado por este tipo de elementos.

La lógica de un componente dentro una clase en Angular 2 es que da soporte a una 
vista interactuando con ella a través de un API con propiedades y métodos.

El componente hace de mediador entre la vista a través de la plantilla y 
la lógica de la app donde se incluirá el modelo de datos, es decir una especie de controlador.

Tienen que ir registrados en **app.module.ts** que es el módulo principal

Ejemplo de componente:
``` js
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

  constructor(){
    this.empleado = new Empleado('David Lopez', 27, 'Electicista', true);
    this.trabajadores = [
      new Empleado('Juan Garcia', 27, 'Fontanería', true),
      new Empleado('Pedro Perez', 42, 'Carpintería', true),
      new Empleado('Maria Sarmiento', 58, 'Cocina', false),
      new Empleado('Igarne Pagatzaurtunduagoienengoa', 23, 'Cocina', true)
    ];
  }

  ngOnInit(){
    console.log(this.trabajadores);
  }
}

```



### PLANTILLAS

Las plantillas van a definir la vista de los componentes. 

Son htmls y tienen sintaxis especial de Angular. Trabajando con el databinding y las directivas.

Ejemplo de plantilla:

``` html
<h3>{{titulo_empleados}}</h3>

<h4>Empleado mejor valorado:</h4>
  <ul>
    <li>{{trabajadores[3].nombre}}</li>
    <li>{{trabajadores[2].edad}}</li>
    <li>{{trabajadores[1].cargo}}</li>
    <li>{{trabajadores[0].contratado}}</li>
  </ul>


```
### DECORADORES Y METADATOS

Con los decoradores(patrón de diseño) vamos a configurar dinamicamente atributos/metadatos de las clases y componentes.

Los metadatos van a describir a las clases pero también describen relaciones, por ejemplo si tenemos un componente y una plantilla el metadato se va a encargar de decirle a Angular que ese componente y esa plantilla van juntos, entre otras muchas cosas.



### SERVICIOS
Son clases con un objetivo claro, facilita la reutilización, son un tipo de componente dentro de la arquitectura de Angular 2 y mediante la inyección de dependencias los podemos usar en otros componentes principales digamos.



### PROVIDERS

Son servicios que nos proveen de datos o funcionalidades mediante sus métodos. Existen providers/servicios
propios de Angular o creados por nosotros mismos.



### DIRECTIVAS
Son funcionalidades aplicables al DOM y a los elementos HTML en las plantillas de un componente. Por ejemplo una directiva puede servir para controlar que un div se muestre o no o recorrer un array en la vista (directivas estructurales, estructuras condicionales y de control) o incluso también puede servir para darle una un estilo u otro a un elemento del HTML o también para interactuar con el modelo de datos del componente. 

Básicamente son nuevos atributos para aplicarle a cualquier cosa en nuestra plantilla/vista.

Hay1 más información sobre la arquitectura de Angular 4 en la [documentación oficial](https://angular.io/docs/ts/latest/guide/architecture.html).
