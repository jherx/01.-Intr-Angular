import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
  heroes:string[] = ['Batman','Superman','Linterna Verde','flash','WonderWoman'];
  heroeBorrado:string = ''

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    // console.log('Borrando a .....' + heroeBorrado);
  }
 
}
