import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';


// el decorador 'injectable' indica que la clase decorada 
// debe comportarse como un servicio
@Injectable()
export class ContactosService {

  constructor(private _httpClient: HttpClient) { }

  // getter de los contactos
  obtenerContactos(): Observable<Contacto[]> {
    return this._httpClient.get<Contacto[]>(
      `${environment.rutaApi}/contactos`
    );
  }

  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    
    return this._httpClient.delete<Contacto>(
      `${environment.rutaApi}/contactos/${contacto.id}`
      );

  }

  agregarContacto(contacto: Contacto): Observable<Contacto> {

    const opciones = {
      headers: new HttpHeaders()
        .set('miSuperApiKey','8197263hgasj')
        .set('Accept','application/json'),
      params: new HttpParams()
        .set('_sort','fechaPublicacion')
        .set('_order','desc')
        .set('userId',contacto.id.toString())
    }
    return this._httpClient.post<Contacto>(
      `${environment.rutaApi}/contactos`, 
      contacto,
      opciones
    );
  }
}
