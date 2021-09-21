import Tile, { getTileCost } from "../../Tile";
import TurnStateBase from "./TurnStateBase";
import Moved from "./Moved";
import getMoveDestinations from "../../Board/destinations/getMoveDestinations";
import { Action } from "./Action";
import {LootingInProgress} from "../Looting";


export default class MoveInProgress extends TurnStateBase {

    public state: "MoveInProgress" = "MoveInProgress";
    public order = 4.5;

    selectTile(tile: Tile) {
        return this.move(tile);
    }

    move(targetTile: Tile): MoveInProgress | Moved {
        let cost = getTileCost(this.context.obstaclePenaltyNulified, targetTile);
        if (this.context.movementDiceTotal) {
            this.context.movementDiceTotal -= cost;
        }
        this.context.previousLocations.add(this.context.board.currentPlayerPosition);
        this.context.board.moveTo(targetTile.index);

        this.availableMoves = getMoveDestinations.bind(this.context.board)(this.context);
        if (this.availableMoves.size === 0) {
            return new Moved(this.context);
        }

        return new MoveInProgress(this.context, this.availableMoves);
    }

    endMove() {
        return new Moved(this.context);
    }

    loot() {
        return new LootingInProgress(this.context);
    }

    getAvailableActions(): Action[] {
        const currentTile = this.context.board.getTiles()[this.context.board.currentPlayerPosition];
        if (currentTile.hasBox) {
            return [{
                type: "Loot",
                action: () => this.loot()
            }]
        }

        return [];
    }
}
