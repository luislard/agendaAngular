import { Component, OnInit } from '@angular/core';

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

  nombres: string[] = [
    'Bob Esponja',
    'Elon Musk',
    'Steve Jobs',
    'Bill Gates',
    'Sundar Picagai',
    'Steve Wozniak',

  ];

  nombres2: string[] = [
    'Robocop',
    'Goku',
  ];

  nombres3: string[] = [
    'Rambo',
  ];

  constructor(){
    console.log('Estoy en el constructor');
  }

  // el hook 'OnInit' se ejecuta cuando el componente tiene
  // asociado su template correspondiente, por lo tanto es 
  // el momento ideal para enlazar datos entre ellos
  ngOnInit(): void {
    console.log('estoy en el hook OnInit :-)');
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
    this.nombres = this.nombres.filter(n => n !== nombre);

  }

}