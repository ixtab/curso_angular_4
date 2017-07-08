import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Es necesario para trabajar con el two way data-binding *
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppFrutaComponent } from './fruta/app.fruta.component';
import { EmpleadoComponent} from './empleados/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent} from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

import { ConversorPipe } from './pipes/conversor.pipe';
import { ConversorExp } from './pipes/conversorexp.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    AppFrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    PlantillasComponent,
    ConversorPipe,
    ConversorExp
  ],
  imports: [
    BrowserModule,
    FormsModule, // * Hay que importarlo también aquí
    routing,
    HttpModule,
    JsonpModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}


/* 

Este es el módulo principal y todos los componentes para que funcionen de manera globlal en la aplicación tienen que ir registrados aquí 

*/