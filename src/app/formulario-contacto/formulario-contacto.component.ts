// formulario-contacto.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from '../contacto';

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
  @Output() botonGuardarPulsado = new EventEmitter<Contacto>();
  
  
  constructor(private _formBuilder: FormBuilder) { 
    this.crearFormulario();
  }

  private crearFormulario(): void { // la tipamos con void para decir que esta funcion no retorna nada
    // Para crear un nuevo 'FormGroup' debemos indicar en un objeto JSON
    // las propiiedades que recogeremos del formulario HTML
    this.formulario = this._formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', Validators.required]
    });
  }

  notificarGuardadoContacto(): void {
    // Tenemos disponible los valores que el susuario indica en un 
    // formulario a traves de la propiedad value del FormGroup
    const contacto: Contacto = this.formulario.value as Contacto;
    this.botonGuardarPulsado.emit(contacto);
  }

}
