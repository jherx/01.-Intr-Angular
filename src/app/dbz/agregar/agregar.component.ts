import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  // Decorador Output() este es utilizado cuando un componente hijo requiere emitir un valor al padre , es como un evento personalizado

  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0,
  };
  @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    //  console.log(this.nuevo);
    // console.log(this.onNuevoPersonaje);

  }

}
