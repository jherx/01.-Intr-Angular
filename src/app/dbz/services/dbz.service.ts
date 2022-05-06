import { Injectable } from "@angular/core";
import { Personajes } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    
    private _personajes:Personajes[] = [
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
        }
    ];

    get personajes():Personajes[] {
        return [...this._personajes]
      }

    constructor(){  }

    agregarPersonaje(agregar:Personajes){
        this._personajes.push(agregar);
    }
}