 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string = 'Contador';
 num:number =10;

 sumar(){
   this.num +=1;
 }
 resta(){
   this.num -=1;
  }
  //  se implementa un método para suma y resta con la expresión para decremento y e incremento 
}
