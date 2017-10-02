import { Component, OnInit } from '@angular/core';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto'

@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  nombres: Contacto[];

  // para hacer la inyección de dependencias de un servicio debemos
  // hacerlo en el constructor de la clase. Anotamos un parámetro
  // con el tipo de servicio a inyectar y
  // añadimos el modificador de acceso correspondiente al parámetro
  constructor(private _contactosService: ContactosService){
    console.log('Componente instanciado y servicio inyectado');
  }

  // el hook 'OnInit' se ejecuta cuando el componente tiene
  // asociado su template correspondiente, por lo tanto es 
  // el momento ideal para enlazar datos entre ellos
  ngOnInit(): void {
    this.nombres = this._contactosService.obtenerContactos();
  }

  eliminarContacto(nombre: Contacto): void {
    this._contactosService.eliminarContacto(nombre);
    this.nombres = this._contactosService.obtenerContactos();
  }

}
