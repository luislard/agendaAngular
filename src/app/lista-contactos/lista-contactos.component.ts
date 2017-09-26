import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // con el decorador output exponemos un evento para que un 
  // componente padre pueda suscribirse a él. Además, 
  // este evento debe ser un 'EventEmitter' del 
  // tipo deseado
  @Output() botonEliminarPulsado = new EventEmitter<string>();

  // definimos los contactos como un array de string
  // Con el decorador 'Input' exponemos un atributo para que
  // un componente padre pueda enlazar datos al hijo.
  @Input() contactos: string[];

  notificarEliminacionContacto(contacto: string): void {
    // Nitificamos datos al componente oadre gracias a
    // la función 'emit' de nuestro 'EventEmitter'
    this.botonEliminarPulsado.emit(contacto);
  }
}
