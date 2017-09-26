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

  constructor(){
    console.log('Estoy en el constructor');
  }

  // el hook 'OnInit' se ejecuta cuando el componente tiene
  // asociado su template correspondiente, por lo tanto es 
  // el momento ideal para enlazar datos entre ellos
  ngOnInit(): void {
    console.log('estoy en el hook OnInit :-)');
  }

}