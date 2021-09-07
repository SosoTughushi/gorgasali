import Character from "./Characters/Character";
import Terrain from "./Terrain";


export default class Tile {
    minDistance: number;
    x: number;
    y: number;
    zone: number;

    constructor(
        public terrain: Terrain,
        public index: number,
        public hasBox: boolean,
        public character: Character | undefined = undefined) {
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

export function convertToIndex(x: number, y: number) {
    return y * 30 + x;
}