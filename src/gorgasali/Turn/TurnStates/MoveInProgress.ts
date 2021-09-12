import Tile, { getTileCost } from "../../Tile";
import TurnStateBase from "./TurnStateBase";
import Moved from "./Moved";


export default class MoveInProgress extends TurnStateBase {

    public state: "MoveInProgress" = "MoveInProgress";
    public order = 4.5;
    move(targetTile: Tile): MoveInProgress | Moved {
        let cost = getTileCost(this.context.obstaclePenaltyNulified, targetTile);
        if (this.context.movementDiceTotal) {
            this.context.movementDiceTotal -= cost;
        }
        this.context.previousLocations.add(this.context.board.currentPlayerPosition);
        this.context.board.moveTo(targetTile.index);

        const availableMoves = this.context.board.getAvailableDestinations(this.context);
        if (availableMoves.size === 0) {
            return new Moved(this.context);
        }

        return new MoveInProgress(this.context);
    }

    endMove() {
        return new Moved(this.context);
    }
}
