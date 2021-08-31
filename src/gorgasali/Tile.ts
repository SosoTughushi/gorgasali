import Terrain from "./Terrain";


export default class Tile {
    terrain: Terrain;
    index: number;
    minDistance: number;
    hasBox: boolean;
    x: number;
    y: number;
    zone: number;

    constructor(terrain: Terrain, index: number, hasBox: boolean) {
        this.terrain = terrain;
        this.index = index;
        this.hasBox = hasBox;
        this.x = index % 30;
        this.y = (index - this.x) / 30;

        const minDist = Math.min(this.x, 29 - this.x, this.y, 29 - this.y);

        this.minDistance = minDist;


        this.zone = 0;
        if (minDist > 3) {
            this.zone = 1;
        }
        if (minDist > 7) {
            this.zone = 2;
        }
        if (minDist > 10) {
            this.zone = 3;
        }
    }

    public setBox(hasBox: boolean): void {
        this.hasBox = hasBox;
    }
}
