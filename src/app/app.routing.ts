import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleados/empleado.component';
import { AppFrutaComponent } from './fruta/app.fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleados', component: EmpleadoComponent},
  {path: 'fruta', component: AppFrutaComponent},
  {path: 'pagina-principal', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'coches', component: CochesComponent},
  {path: 'plantillas', component: PlantillasComponent},
  {path: 'contacto/:id', component: ContactoComponent},
  {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);