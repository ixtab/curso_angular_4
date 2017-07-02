import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Es necesario para trabajar con el two way data-binding *

import { AppComponent } from './app.component';
import { AppFrutaComponent } from './fruta/app.fruta.component';
import { EmpleadoComponent} from './empleados/empleado.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AppFrutaComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // * Hay que importarlo también aquí
  ],
  providers: [],
  bootstrap: [
  AppComponent
  ]
})
export class AppModule { }


/* 

Este es el módulo principal y todos los componentes para que funcionen de manera globlal en la aplicación tienen que ir registrados aquí 

*/