import { convertToIndex } from "../../Tile";
import Board from "../board";
import { convertToCoordinates } from "../convertToCoordinates";

export default function getTeleportDestinations(this: Board) {

    const { x, y } = convertToCoordinates(this.currentPlayerPosition);

    const array8 = Array.from({ length: 8 }, (_, i) => i + 1);

    const arr = array8.map(i => { return { x: x + i, y } }).filter(a => a.x < 30)
        .concat(
            array8.map(i => { return { x: x - i, y } }).filter(a => a.x > -1)
        ).concat(
            array8.map(i => { return { x, y: y + i } }).filter(a => a.y < 30)
        ).concat(
            array8.map(i => { return { x, y: y - i } }).filter(a => a.y > -1)
        )
        .map(c => convertToIndex(c.x, c.y))
        .map(i => this.getTiles()[i])
        .filter(t => t.character === undefined)
        .map(c => c.index);


    let destinations = new Set<number>(arr);
    return destinations;
}