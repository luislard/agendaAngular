import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { ReactiveFormsModule } from '@angular/forms'

// usamos el decorador 'NgModle' para que la clase decorada
// se comporte como un modulo
@NgModule({
  // En el metadato 'declarations' indicamos todos aquellos
  // componentes, pipes y directivas de mi aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent
  ],
  // En el metadato 'imports' indicamos todos aquellos 
  // módulos de los cuáles mi aplicación depende
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  //  en el metadato 'providers' indicamos todos aquellos 
  // proveedores de clase o valores que puedan ser inyectados.
  providers: [
    ContactosService
  ],
  // En el metadato 'bootstrap' indicamos el componente raíz
  // a partir del cuál se construyr toda la aplicación.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }