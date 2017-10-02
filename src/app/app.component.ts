import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contacto } from './contacto'

// con el decorador '@Component' otorgamos a la clase 
// decorada comportamiento de componente.
@Component({
  // el metadato 'selector' indica el selector CSS encargado de
  // seleccionar el elemento HTML en el cual instanciar
  // el componente.
  selector: 'app-root',
  // En 'templateUrl' indicamos la ruta la template (documento HTML)
  // asociado al componente.
  templateUrl: './app.component.html',
  // En 'stylesUrls' indicampos las rutas de las hojas de estilos 
  // que aplicarán al componente. 
  styleUrls: ['./app.component.css']  // aqui podriamos colocar .scss
})
export class AppComponent implements OnInit {

  

  // para hacer la inyección de dependencias de un servicio debemos
  // hacerlo en el constructor de la clase. Anotamos un parámetro
  // con el tipo de servicio a inyectar y
  // añadimos el modificador de acceso correspondiente al parámetro
  constructor(private _contactosService: ContactosService){
    console.log('Componente instanciado y servicio inyectado');
  }

  crearContacto(contacto: Contacto): void {
    this._contactosService.agregarContacto(contacto);
    this.nombres = this._contactosService.obtenerContactos();
  }

}