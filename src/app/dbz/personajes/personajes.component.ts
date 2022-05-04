import { Component, Input  } from '@angular/core';
import { personajes } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {

  @Input('data')  personajes:personajes[] = [  ]
 

}
