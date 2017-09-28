// formulario-contacto.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  //  inyectamos como deoendencua 'FormBuilder'. Con esta
  // calse podemos crear nuesvos 'FormGroup'. indicando todas las propiedades
  // que queremos recoger del formulario HTML
  formulario: FormGroup; // atributo que enlaza con la vista
  
  constructor(private _formBuilder: FormBuilder) { 
    this.crearFormulario();
  }

  private crearFormulario(): void { // la tipamos con void para decir que esta funcion no retorna nada
    // Para crear un nuevo 'FormGroup' debemos indicar en un objeto JSON
    // las propiiedades que recogeremos del formulario HTML
    this.formulario = this._formBuilder.group({
      nombre: 'Pablito',
      apellidos: 'Perez'
    });
  }

  guardarContacto(): void {
    // Tenemos disponible los valores que el susuario indica en un 
    // formulario a traves de la propiedad value del FormGroup
    console.log(this.formulario.value);
  }

}
