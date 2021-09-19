import Tile from "../../Tile";
import MoveInProgress from "./MoveInProgress";
import Moved from "./Moved";
import TurnStateBase from "./TurnStateBase";


export default class MovementCardUsed extends TurnStateBase {
    public state: "MovementCardUsed" = "MovementCardUsed";
    public order = 4;
    
    selectTile(tile: Tile) {
        return this.move(tile);
    }

    move(targetTile: Tile): MoveInProgress | Moved {
        const inProgress = new MoveInProgress(this.context, this.availableMoves);
        return inProgress.move(targetTile);
    }
    
    skipMovement(): Moved {
        return new Moved(this.context);
    }

    getAvailableActions() {
        return [{
            name: "Skip Movement",
            action: () => this.skipMovement()
        }]
    }
}
