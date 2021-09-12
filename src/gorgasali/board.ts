import { ObstacleType } from "./Cards/Support/Consumable/ObstacleNulifier";
import Character from "./Characters/Character";
import Terrain from "./Terrain";
import Tile, { convertToIndex, getTileCost } from "./Tile";
import TurnContext from "./Turn/TurnContext";

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

    public isInRange(targetX: number, targetY: number, maxRange: number) {
        const { x, y } = convertToCoordinates(this.currentPlayerPosition);
        if (x === targetX && y === targetY) {
            return false;
        }

        const diffX = Math.abs(targetX - x);
        const diffY = Math.abs(targetY - y);

        return Math.max(diffX, diffY) <= maxRange;
    }

    public getAvailableDestinations(turnContext: TurnContext) {

        return this.getAvailableDestinationsRaw(turnContext.movementDiceTotal ?? 0,
            turnContext.previousLocations,
            turnContext.obstaclePenaltyNulified,
            turnContext.movementAmplifiers?.compass !== undefined);
    }

    private getAvailableDestinationsRaw(movementDiceResult: number, alreadyVisited: Set<number>, obstacleNulified?: ObstacleType, canMoveDiagonally?: boolean) {

        const current = this.currentPlayerPosition;
        const { x, y } = convertToCoordinates(current);

        const neighbourIndexes = []

        const isOnLeft = x === 0;
        const isOnRight = x === 29;
        const isOnTop = y === 0;
        const isOnBottom = y === 29;

        if (!isOnTop) {
            neighbourIndexes.push(current - 30);
        }
        if (!isOnBottom) {
            neighbourIndexes.push(current + 30);
        }
        if (!isOnLeft) {
            neighbourIndexes.push(current - 1);
        }
        if (!isOnRight) {
            neighbourIndexes.push(current + 1);
        }

        if (canMoveDiagonally) {
            if (!isOnTop) {
                if (!isOnLeft) {
                    neighbourIndexes.push(current - 31);
                }
                if (!isOnRight) {
                    neighbourIndexes.push(current - 29);
                }
            }

            if (!isOnBottom) {
                if (!isOnLeft) {
                    neighbourIndexes.push(current + 29);
                }
                if (!isOnRight) {
                    neighbourIndexes.push(current + 31);
                }
            }
        }

        const resultArray = neighbourIndexes
            .filter(n => !alreadyVisited.has(n))
            .map(n => this.tiles[n])
            .filter(t => t.character === undefined)
            .filter(t => movementDiceResult >= (getTileCost(obstacleNulified, t) ?? 0))
            .map(c => c.index);

        const resultSet = new Set(resultArray);

        return resultSet;
    }

    public moveTo(position: number) {
        const currentTile = this.tiles[this.currentPlayerPosition];
        currentTile.character = undefined;

        this.currentPlayer.position = position;
        const targetTile = this.tiles[position];
        targetTile.character = this.currentPlayer;
    }
}

function convertToCoordinates(index: number) {
    const x = index % 30;
    const y = (index - x) / 30;
    return { x, y };
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

    const addBoxes = (zone: number, count: number) => {
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