import { Component, OnInit } from '@angular/core';

interface personajes{
  nombre:string,
  poder:number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

personaje:personajes[] = [
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
  },
]

 nuevo:personajes ={
   nombre: '',
   poder : 0
 }

//  cambiarNombre( event:any){
//    console.log(event.target.value);
//  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    // console.log(this.nuevo);
    this.personaje.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder : 0
    }
  }

}
