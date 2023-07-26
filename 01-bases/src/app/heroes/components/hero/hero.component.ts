import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public edad: number = 45;
  public nameCapital: string = '';

  // Los getters/setters se usan como propiedades de la clase
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  hello():string {
    return `Hola ${this.name}! Tienes ${this.edad} años?`
  }

  changeName():void {
    this.name = 'Tony Stark';
  }

  changeEdad():void {
    this.edad = 50;
  }

  resetComponent():void {
    this.name = 'ironman';
    this.edad = 45;
  }
}
