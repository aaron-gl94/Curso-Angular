import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>Base: {{ base }}</h3>

        <button (click)="acumular(base)">+{{ base }}</button>
        <p>{{ numero }}</p>
        <button (click)="acumular(-base)">-{{ base }}</button>
    `,
})
export class ContadorComponent {
    public titulo : string  = 'Contador APP';
    public numero : number  = 0;
    public base   : number  = 5;

    acumular(valor:number) {
    this.numero += valor;
    }

    /* sumar() {
    this.numero += 1;
    }

    restar() {
    this.numero -= 1;
    } */
}
