
import React from 'react';
import Tile from '../Tile';
import BoardClass from "../../gorgasali/board";
import './Board.css';
import TileClass from "../../gorgasali/Tile";
import Character from '../../gorgasali/Characters/Character';


function Board({ board, onTileClick, selectedCharacter }: BoardProps) {
    const n = 30;

    const tiles = board
        .getTiles();

    const isCharacterSelected = (tile: TileClass) => selectedCharacter && selectedCharacter === tile.character;

    const tileComponents =
        tiles
            .map(tile => (<Tile tile={tile} onTileClick={onTileClick} attributes={{ isSelected: isCharacterSelected(tile) }} />));

    const sliced =
        Array
            .from({ length: n }, (_, i) => tileComponents.slice(i * n, i * n + n))
            .map(slice => (<div>{slice} <br /></div>))

    return (
        <div className="board">
            {sliced}
        </div>
    );
}


interface BoardProps {
    board: BoardClass;
    onTileClick(tile: TileClass): void;
    selectedCharacter: Character | undefined
}

export default Board;
