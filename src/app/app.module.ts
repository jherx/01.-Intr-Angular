import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// MODULOS CREADOS MANUALMENTE
import { HeroesModule } from "./heroes/heroes.module";
import { contadorModule } from './contador/contador.module';


@NgModule({
  declarations: [ 
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
