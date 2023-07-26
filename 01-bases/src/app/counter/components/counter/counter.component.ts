import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    // templateUrl: './counter.component.html'
    template: `
        <h3>Counter Component</h3>
        <div>
            <b>Contador: {{counter}} </b>
            <br>
            <button (click)="increaseBy(-1)">-1</button>
            <button (click)="resetCounter()">Reset Contador</button>
            <button (click)="increaseBy(+1)">+1</button>
        </div>
        `
})
export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter(): void {
        this.counter = 10;
    }

}