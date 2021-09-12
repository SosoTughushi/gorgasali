import { ObstacleType } from "../Cards/Support/Consumable/MovementConsumables/ObstacleNulifier";
import Character from "../Characters/Character";
import { generateTiles } from "./generateTiles";
import Terrain from "../Terrain";
import Tile, { convertToIndex, getTileCost } from "../Tile";
import TurnContext from "../Turn/TurnContext";
import { convertToCoordinates } from "./convertToCoordinates";

export default class Board {
    private tiles: Tile[];
    private currentPlayerIndex = 0;

    private _characters: Character[];
    public get characters(): Character[] {
        return this._characters;
    }

    public get currentPlayer(): Character {
        const index = this.currentPlayerIndex % this._characters.length;
        return this._characters[index];
    }

    public get currentPlayerPosition(): number {
        const index = this.currentPlayerIndex % this._characters.length;
        return this._characters[index].position;
    }

    constructor() {
        this.tiles = generateTiles();
        this._characters = [];
    }

    public placeCharacter(x: number, y: number, character: Character) {
        const index = convertToIndex(x, y);
        this._characters.push(character);

        const targetTile = this.tiles[index];
        targetTile.character = character;
        character.position = index;
    }

    public getTiles(): Tile[] {
        return this.tiles;
    }

    public nextPlayer() {
        this.currentPlayerIndex++;
    }

    public moveTo(position: number) {
        const currentTile = this.tiles[this.currentPlayerPosition];
        currentTile.character = undefined;

        this.currentPlayer.position = position;
        const targetTile = this.tiles[position];
        targetTile.character = this.currentPlayer;
    }
}


