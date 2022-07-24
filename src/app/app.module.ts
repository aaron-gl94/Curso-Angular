import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    // Componentes
    AppComponent,
  ],
  imports: [
    // Modulo
    BrowserModule,
    ContadorModule,
    HeroesModule
  ],
  providers: [
    // Servicios / APIs

  ],
  bootstrap: [
    // Componente Principal
    AppComponent
  ]
})
export class AppModule { }
