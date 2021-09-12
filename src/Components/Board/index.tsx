import React from 'react';
import Tile from '../Tile';
import BoardClass from "../../gorgasali/board";
import './Board.css';
import TileClass from "../../gorgasali/Tile";
import Character from '../../gorgasali/Characters/Character';
import TurnContext from '../../gorgasali/Turn/TurnContext';
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import context from 'react-bootstrap/esm/AccordionContext';
import ChangesTurnState from '../Turn/ChangesTurnState';


function Board({ board, selectedCharacter, turnContext, turnState, onTurnStateChange }: BoardProps) {
    const n = 30;

    const tiles = board
        .getTiles();

    let isDimmed: (tile: TileClass) => boolean = t => false;
    let isHighlighted: (tile: TileClass) => boolean = t => false;
    let isTrace: (tile: TileClass) => boolean = t => false;

    let onTileClick = (tile: TileClass) => { }
    switch (turnState.state) {
        case "MovementCardUsed":
        case "MovementDiceRolled":
        case "MoveInProgress":
            const availableMoves = board.getAvailableDestinations(turnContext);

            isHighlighted = tile => availableMoves.has(tile.index);
            isDimmed = tile => !availableMoves.has(tile.index);
            isTrace = tile => turnContext.previousLocations.has(tile.index);

            onTileClick = tile => {
                if (availableMoves.has(tile.index)) {
                    onTurnStateChange(turnState.move(tile));
                }
            };
            break;
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
            .map(slice => (<div>{slice} <br /></div>))

    return (
        <div className="board">
            {sliced}
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
