import { Component } from '@angular/core';
import { personajes } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

personajes:personajes[] = [
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

nuevo:personajes = {
  nombre: '',
  poder:0
}
 

}
