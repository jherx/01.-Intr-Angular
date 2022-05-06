import { Component, Input  } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {

  // @Input('data')  personajes:Personajes[] = [  ]
  get personajes(){
    return this.DbzService.personajes;
  }
 
  constructor(private DbzService:DbzService){

  }
}
