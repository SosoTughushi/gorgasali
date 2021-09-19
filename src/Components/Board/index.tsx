import React from 'react';
import Tile from '../Tile';
import BoardClass from "../../gorgasali/Board/board";
import './Board.scss';
import TileClass from "../../gorgasali/Tile";
import Character from '../../gorgasali/Characters/Character';
import TurnContext from '../../gorgasali/Turn/TurnContext';
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import ChangesTurnState from '../Turn/ChangesTurnState';
// import getTeleportDestinations from '../../gorgasali/Board/destinations/getTeleportDestinations';
// import getMoveDestinations from '../../gorgasali/Board/destinations/getMoveDestinations';
// import getShootingRange from '../../gorgasali/Board/destinations/getShootingRange';


function Board({ board, selectedCharacter, turnContext, turnState, onTurnStateChange }: BoardProps) {
    const n = 30;

    const tiles = board
        .getTiles();

    let isHighlighted: (tile: TileClass) => boolean = t => false;
    let isDimmed: (tile: TileClass) => boolean = t => false;
    let isTrace: (tile: TileClass) => boolean = t => false;

    let onTileClick = (tile: TileClass) => { }

    if (turnState.availableMoves) {
        const availableMoves = turnState.availableMoves;
        isHighlighted = tile => availableMoves.has(tile.index);
        isDimmed = tile => !isHighlighted(tile)
        isTrace = tile => turnContext.previousLocations.has(tile.index);
        onTileClick = tile => {
            if (isHighlighted(tile)) {
                onTurnStateChange(turnState.selectTile(tile));
            }
        };
    }

    const tileComponents =
        tiles
            .map(tile => (<Tile
                tile={tile}
                onTileClick={onTileClick}
                attributes={{
                    isSelected: selectedCharacter && selectedCharacter === tile.character,
                    isHighlighted: isHighlighted(tile),
                    isDimmed: isDimmed(tile),
                    trace: isTrace(tile),
                    isCurrentPlayer: board.currentPlayer === tile.character,
                }} />
            ));

    const sliced =
        Array
            .from({ length: n }, (_, i) => tileComponents.slice(i * n, i * n + n))
            .map(slice => (<div className="board-row">{slice} <br /></div>))

    return (
        <div className="board-container">
            <div className="board" >
                <div className="top-coordinates-panel">
                    {Array.from({ length: 880 }, (_, i) => i).map(c => (c % 20 == 0 ? (<span>|</span>) : (<span>.</span>)))}
                </div>

                <div className="board-body">
                    <table>
                        <tbody>
                            <tr>
                                <td className="left-coordinates-panel">
                                {Array.from({ length: 128 }, (_, i) => i).map(c => (c % 20 == 0 ? (<div>___</div>) : (<div>-</div>)))}
                                </td>
                                <td>
                                    <div className="board-tiles">
                                        {sliced}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    );
}


interface BoardProps extends ChangesTurnState {
    board: BoardClass;
    selectedCharacter: Character | undefined;
    turnContext: TurnContext;
    turnState: TurnStateMachine;
}

export default Board;
