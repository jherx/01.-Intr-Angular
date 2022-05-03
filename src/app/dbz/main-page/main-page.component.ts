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

 nuevo:personajes ={
   nombre: 'Gohan',
   poder:16000
 }

//  cambiarNombre( event:any){
//    console.log(event.target.value);
//  }

  agregar(){
    
    console.log(this.nuevo);
    
  }

}
