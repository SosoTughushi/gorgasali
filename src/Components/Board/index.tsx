import React from 'react';
import Tile from '../Tile';
import BoardClass from "../../gorgasali/Board/board";
import './Board.css';
import TileClass from "../../gorgasali/Tile";
import Character from '../../gorgasali/Characters/Character';
import TurnContext from '../../gorgasali/Turn/TurnContext';
import TurnStateMachine from '../../gorgasali/Turn/TurnStates/turnStateMachine';
import context from 'react-bootstrap/esm/AccordionContext';
import ChangesTurnState from '../Turn/ChangesTurnState';
import getTeleportDestinations from '../../gorgasali/Board/destinations/getTeleportDestinations';
import getMoveDestinations from '../../gorgasali/Board/destinations/getMoveDestinations';
import getShootingRange from '../../gorgasali/Board/destinations/getShootingRange';


function Board({ board, selectedCharacter, turnContext, turnState, onTurnStateChange }: BoardProps) {
    const n = 30;

    const tiles = board
        .getTiles();

    let isHighlighted: (tile: TileClass) => boolean = t => false;
    let isDimmed: (tile: TileClass) => boolean = t => false;
    let isTrace: (tile: TileClass) => boolean = t => false;

    let onTileClick = (tile: TileClass) => { }
    switch (turnState.state) {
        case "MovementCardUsed":
        case "MovementDiceRolled":
        case "MoveInProgress":
            const availableMoves = getMoveDestinations.bind(board)(turnContext);

            isHighlighted = tile => availableMoves.has(tile.index);
            isDimmed = tile => !isHighlighted(tile)
            isTrace = tile => turnContext.previousLocations.has(tile.index);

            onTileClick = tile => {
                if (isHighlighted(tile)) {
                    onTurnStateChange(turnState.move(tile));
                }
            };
            break;

        case "TeleportInProgress":
            const teleportDestinations = getTeleportDestinations.bind(board)();

            isHighlighted = tile => teleportDestinations.has(tile.index);
            isDimmed = tile => !isHighlighted(tile);

            onTileClick = tile => {
                if (isHighlighted(tile)) {
                    onTurnStateChange(turnState.teleport(tile))
                }
            }
            break;
        case "FlameBulbInProgress":
            const rangeOf2 = getShootingRange.bind(board)(2, 2);

            isHighlighted = tile => rangeOf2.has(tile.index);
            isDimmed = tile => !isHighlighted(tile);

            onTileClick = tile => {
                if (isHighlighted(tile) && tile.character !== undefined) {
                    onTurnStateChange(turnState.chooseTarget(tile.character));
                }
            }
            break;
        case "WeaponCardInProgress":
            const ranges = getShootingRange.bind(board)(turnState.card.weaponRange);

            isHighlighted = tile => ranges.has(tile.index);
            isDimmed = tile => !isHighlighted(tile);

            onTileClick = tile => {
                if(isHighlighted(tile) && tile.character !== undefined) {
                    onTurnStateChange(turnState.chooseTarget(tile.character));
                }
            }
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
