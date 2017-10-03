import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;
  @Output() botonFacebookPulsado = new EventEmitter<string>();
  @Output() botonTwitterPulsado = new EventEmitter<string>();

  notificarNavegacionFacebook(): void {
    this.botonFacebookPulsado.emit('');
  }
  notificarNavegacionTwitter(): void {
    this.botonTwitterPulsado.emit('');
  }

}
