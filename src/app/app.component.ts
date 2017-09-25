import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // static cosasStatic = [100,'string', true]; // propiedad de la clase
    // cosas = [100,'string', true]; // propiedad de la instancia
    // cosas2: any[] = [100,'string', true];
    // cosasStr: string[] = ['hola','string', 'wawa'];
}

class Coche {

  constructor(public ruedas:number, public puertas: number) { }
}

let coche1 = new Coche(4, 3);
coche1.ruedas;

let coche2 = new Coche(5, 5);
coche2.ruedas;
