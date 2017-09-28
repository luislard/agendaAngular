// formulario-contacto.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  formulario: FormGroup; // atributo que enlaza con la vista
  constructor(private _formBuilder: FormBuilder) { 
    this.crearFormulario();
  }

  private crearFormulario(): void { // la tipamos con void para decir que esta funcion no retorna nada
    this.formulario = this._formBuilder.group({
      nombre: '',
      apellidos: ''
    });
  }

  guardarContacto(): void {
    console.log(this.formulario.value);
  }

}
