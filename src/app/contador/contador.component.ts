import {Component} from'@angular/core' // componente 

@Component({
    selector: 'app-contador', 
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <!-- los eventos en angular van entre paréntesis -->
        <button (click)="acumular(base)"> {{base}}</button>

        <span>{{num}}</span>

        <button (click)="acumular(-base)">{{ -base}}</button>
        <!-- contador funcionando correctamente  -->
    `
})

export class ContadorComponent{
    title:string = 'Contador';
    num:number =10;
    base:number =5;
   
    acumular(valor:number){
     this.num += valor ;
    }
   
}