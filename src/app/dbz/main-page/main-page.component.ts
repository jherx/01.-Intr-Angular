import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

personajes:Personajes[] = [
  {
    nombre:'Goku',
    poder :16000
  },
  {
    nombre:'Vegeta',
    poder :15000
  },
  {
    nombre:'Krillin ',
    poder :15000
  }
];

nuevo:Personajes = {
  nombre: 'Pipiolo', 
  poder:10
}
 
agregarNuevoPersonaje(personaje:Personajes){
  
  this.personajes.push(personaje)
}

}
