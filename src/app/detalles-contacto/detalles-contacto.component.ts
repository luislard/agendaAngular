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
    this.botonFacebookPulsado.emit(this._construirRutaFacebook());
  }
  notificarNavegacionTwitter(): void {
    this.botonTwitterPulsado.emit(this._construirRutaTwitter());
  }

  _construirRutaFacebook(): string {
    console.log('face');
        return this.contacto.facebook
        ? `https://www.facebook.com/${this.contacto.facebook}`
        : null;
    }
  _construirRutaTwitter(): string {
      return this.contacto.twitter
      ? `https://twitter.com/${this.contacto.twitter}`
      : null;
  }

}
