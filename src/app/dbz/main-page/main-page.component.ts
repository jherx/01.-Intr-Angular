import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {



 nuevo:Personajes = {
  nombre: 'Pipiolo', 
  poder:10
}
 



// inyección de dependencias
constructor(){

}
}
