import { getTileCost } from "../../Tile";
import TurnContext from "../../Turn/TurnContext";
import Board from "../board";
import { convertToCoordinates } from "../convertToCoordinates";

export default function getMoveDestinations(this: Board, turnContext: TurnContext) {

    const movementDiceResult = turnContext.movementDiceTotal ?? 0;

    const alreadyVisited = turnContext.previousLocations;
    const obstacleNulified = turnContext.obstaclePenaltyNulified;
    const canMoveDiagonally = turnContext.movementAmplifiers?.compass !== undefined;

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
        .map(n => this.getTiles()[n])
        .filter(t => t.character === undefined)
        .filter(t => movementDiceResult >= (getTileCost(obstacleNulified, t) ?? 0))
        .map(c => c.index);

    const resultSet = new Set(resultArray);

    return resultSet;
}