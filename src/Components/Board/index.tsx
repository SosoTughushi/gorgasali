
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


    const availableMoves = board.getAvailableDestinations(12);
    const tileComponents =
        tiles
            .map(tile => (<Tile 
                tile={tile} 
                onTileClick={onTileClick} 
                attributes={{ 
                    isSelected: selectedCharacter && selectedCharacter === tile.character, 
                    isHighlighted: availableMoves.has(tile.index),
                    isDimmed: !availableMoves.has(tile.index),
                    isCurrentPlayer: board.currentPlayer === tile.character
                }} />
                ));

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
    selectedCharacter: Character | undefined;
}

export default Board;
