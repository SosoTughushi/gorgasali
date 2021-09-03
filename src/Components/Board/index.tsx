
import React from 'react';
import Tile from '../Tile';
import BoardClass from "../../gorgasali/board";
import './Board.css';


function Board({board}: BoardProps) {
    const n = 30;

    const tiles = board
        .getTiles();

    const tileComponents =
        tiles
            .map(tile => (<Tile tile={tile}  />));

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
}

export default Board;
