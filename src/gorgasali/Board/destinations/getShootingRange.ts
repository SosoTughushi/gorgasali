import { convertToIndex } from "../../Tile";
import Board from "../board";
import { convertToCoordinates } from "../convertToCoordinates";

export default function getShootingRange(this: Board, maxRange: number, minRange?: number) {
    const { x, y } = convertToCoordinates(this.currentPlayerPosition);


    const ranges: { x: number, y: number }[] = [];
    for (let range = minRange ?? 1; range <= maxRange; range++) {
        const sideSize = range * 2;

        for (let i = 0; i < sideSize; i++) {
            ranges.push({ x: x - range, y: y - range + i })
        }

        for (let i = 0; i < sideSize; i++) {
            ranges.push({ x: x + range, y: y - range + i +1 })
        }

        for (let i = 0; i < sideSize; i++) {
            ranges.push({ x: x - range + i +1, y: y - range })
        }

        for (let i = 0; i < sideSize; i++) {
            ranges.push({ x: x - range + i, y: y + range })
        }
    }
    const resultArr =
        ranges
            .filter(c => c.x > -1)
            .filter(c => c.y > -1)
            .filter(c => c.x < 30)
            .filter(c => c.y < 30)
            .map(c => convertToIndex(c.x, c.y))

    return new Set<number>(resultArr);
}

export function isAnyoneInRange(this: Board, maxRange: number, minRange?: number) {
    const range2 = getShootingRange.bind(this)(maxRange,minRange);
    const tiles = this.getTiles();
    const characters = Array.from(range2).map(i=>tiles[i]).filter(t=>t.character!== undefined);

    if(characters.length > 0) {
        return true;
    }
    return false;
}