
export default class Cell {
    x: number = 0;
    y: number = 0;
    neighbours: Cell[] = [];

    isAlive: boolean = false;
    isAliveNextGen: boolean = false;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

	// Get current cell neighbours
    getNeighbours(cells) {
        return cells.filter(cell => {
            if (Math.abs(this.x - cell.x) <= 1 && Math.abs(this.y - cell.y) <= 1 && !(this.x == cell.x && this.y == cell.y)) {
                this.neighbours.push(cell);
            }
        });
    }

	// Get current cell alive neighbours
    getAliveNeighbours() {
        return this.neighbours.filter(x => x.isAlive === true);
    }

	// Rules
	// Each cell with one or no neighbors dies, as if by solitude.
	// Each cell with four or more neighbors dies, as if by overpopulation.
	// Each cell with two or three neighbors survives.
    letCellLiveOrDie() {
        let aliveNeighboursCount = this.getAliveNeighbours().length;

        return (aliveNeighboursCount > 1 && aliveNeighboursCount < 4) ? true : false;
    }

	// Each cell with three neighbors becomes populated.
    letCellRevive() {
        return this.getAliveNeighbours().length == 3 ? true : false;
    }

	// Execute game rules
    nextGenStatus() {
        this.isAliveNextGen = this.isAlive ? this.letCellLiveOrDie() : this.letCellRevive();
    }

	// Sets the next gen status
    setNextGenStatus() {
        this.isAlive = this.isAliveNextGen;
    }
}