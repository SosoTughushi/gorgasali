import Character from "./Characters/Character";
import Tile, {convertToIndex} from "./Tile";

export default class Board {
    private tiles: Tile[];
    private currentPlayerIndex = 0;
    
    private _characters : Character[];
    public get characters() : Character[] {
        return this._characters;
    }

    public get currentPlayer(): Character {
        const index = this.currentPlayerIndex % this._characters.length;
        return this._characters[index];
    }
    
    constructor() {
        this.tiles = generateTiles();
        this._characters = [];
    }

    public placeCharacter(x:number, y:number,character: Character) {
        this._characters.push(character);

        const index = convertToIndex(x,y);
        const targetTile = this.tiles[index];
        targetTile.character = character;
    }

    public getTiles(): Tile[] {
        return this.tiles;
    }

    public nextPlayer() {
        this.currentPlayerIndex ++;
    }
}

function generateTiles(): Tile[] {
    let tileIndexes = Array.from({ length: 30 * 30 }, (_, i) => i);

    const getRandomAndRemove = () => {
        const randomIndex = Math.floor(Math.random() * tileIndexes.length);
        const value = tileIndexes[randomIndex];
        tileIndexes.splice(randomIndex, 1);
        return value;
    }

    const tiles: Tile[] = [];

    const generateTiles = (count: number, terrain: "flat" | "water" | "mountain" | "forest" | "healingPlace") => {
        for (let i = 0; i < count; i++) {
            const tileVal = getRandomAndRemove();
            tiles.push(new Tile(terrain, tileVal, false))
        }
    }

    generateTiles(100, "forest");
    generateTiles(150, "water");
    generateTiles(50, "mountain");
    generateTiles(5, "healingPlace");
    generateTiles(tileIndexes.length, "flat");

    const addBoxes = ( zone: number, count: number) => {
        tileIndexes = tiles.filter(t => t.zone === zone).map(t => t.index);
        for (let i = 0; i < count; i++) {
            const index = getRandomAndRemove();
            const targetTile = tiles.find(c => c.index === index);
            targetTile?.setBox(true);
        }
    }

    addBoxes(0, 64);
    addBoxes(1, 20);
    addBoxes(2, 8);
    addBoxes(3, 4);



    return tiles.sort((a, b) => (a.index > b.index) ? 1 : -1);
}