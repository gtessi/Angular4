import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import Cell from '../model/cell';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    // Game control flags
    isGameRunning: boolean = false;
    playing: Observable<any> = Observable.interval(1000);
    subscriber: Subscription;

    // Game configuration
    rows: number = 50;
    columns: number = 50;
    generation: number = 0;
    cells: Cell[] = [];

    constructor() { }

    ngOnInit() {
        this.createCells();
    }

    // Game control functions
    resumePauseGame() {
        if (this.isGameRunning) {
            this.subscriber.unsubscribe();
        } else {
            this.subscriber = this.playing.subscribe(generation => {
                this.nextGen();
            });
        }

        this.isGameRunning = !this.isGameRunning;
    }

    // Game mechanics
    createCells() {
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                let cell = new Cell(x, y);

                if ((x == 0 && y == 0) ||
                    (x == 0 && y == 1) ||
                    (x == 1 && y == 0) ||
                    (x == 1 && y == 3) ||
                    (x == 2 && y == 1) ||
                    (x == 2 && y == 2)
                ) {
                    cell.isAlive = true;
                }

                this.cells.push(cell);
            }
        }

        this.cells.map(x => x.getNeighbours(this.cells));
    }

    nextGen() {
        this.cells.map(x => x.nextGenStatus());
        this.cells.map(x => x.setNextGenStatus());
        this.generation++;
    }
}
