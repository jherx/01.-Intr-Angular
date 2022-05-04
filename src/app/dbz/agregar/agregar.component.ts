import { Component, Input } from '@angular/core';
import { personajes } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent   {

  @Input() personajes:personajes[] = [];

  @Input() nuevo:personajes ={
    nombre: '',
    poder : 0
  }
 
 
   agregar(){
     if(this.nuevo.nombre.trim().length === 0){
       return;
     }
    

     this.personajes.push(this.nuevo)
     this.nuevo = {
       nombre: '',
       poder : 0
     }
     console.log(this.personajes);
     console.log(this.nuevo);
     
   }

}
