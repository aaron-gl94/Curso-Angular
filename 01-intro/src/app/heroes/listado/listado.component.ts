import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = [
    'Ironman',
    'Spiderman',
    'Thor',
    'Hulk',
    'Capitan America',
  ];

  public heroeBorrado: string = '';
  public statusHeroe: boolean = false;

  public borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';

    console.log(`Heroe borrado: ${this.heroeBorrado}`);

    this.statusHeroe = (this.heroeBorrado !== '') ? true : false;
  }
}
