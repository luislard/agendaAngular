import { Injectable } from '@angular/core';

// el decorador 'injectable' indica que la clase decorada 
// debe comportarse como un servicio
@Injectable()
export class ContactosService {

  // por convención si no ponemos private el atributo es public, 
  // por convención si algo es privado colocamos el prefijo _<nombre>.
  // se pone en privado para que nadie pueda modificarlos
  private _nombres: string[] = [
    'Bob Esponja',
    'Elon Musk',
    'Steve Jobs',
    'Bill Gates',
    'Sundar Picagai',
    'Steve Wozniak',

  ];

  // getter de los contactos
  obtenerContactos(): string[] {
    return this._nombres;
  }

  eliminarContacto(nombre: string): void {
    console.log(nombre);
    
    // Para eliminar un contacto lo que hacemos es
    // filtrar la colección y quedarnos con todos
    // aquellos que no sean el indicado

    // la funcion filter itera por los elementos del array
    // y se queda con los elementos que returnen true
    // en este caso los nombres diferentes al nombre que
    // hemos pulsado.
    this._nombres = this._nombres.filter(n => n !== nombre);

  }
}
