import { Component, OnInit } from '@angular/core';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto'

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent {

  constructor(private _contactosService: ContactosService){
    console.log('Componente instanciado y servicio inyectado');
  }

  crearContacto(contacto: Contacto): void {
    this._contactosService.agregarContacto(contacto);
  }

}
