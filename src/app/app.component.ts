 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string = 'Contador';
 num:number =10;
 base:number =5;

//?  Simplificamos las funciones suma y resta con una función donde pasamos un argumento  de tipo numero donde indicamos que a nuestra constante se le agregara ( += )nuestra variable del argumento , en donde se le puede vasar un valor negativo o positivo 

// modificamos el contador para contar de 5 en 5 sustituyendo por la constante base 
 acumular(valor:number){
  this.num += valor ;
 }
//  sumar(){
//    this.num +=1;
//  }
//  resta(){
//    this.num -=1;
//   }
  //  se implementa un método para suma y resta con la expresión para decremento y e incremento 
}
