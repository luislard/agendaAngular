import { Component, OnInit } from '@angular/core';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent {

  constructor(
    private _contactosService: ContactosService,
    private _router: Router
  
  ){ }

  crearContacto(contacto: Contacto): void {
    this._contactosService.agregarContacto(contacto);
    // this._router.navigate(['a','b','c']); // /a/b/c
    // this._router.navigate(['lista-contacto']);
    this._contactosService
      .agregarContacto(contacto)
      .subscribe( () => this._router.navigate(['/lista-contactos']));
  }

}
