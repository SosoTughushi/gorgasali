import Tile from "../../Tile";
import MoveInProgress from "./MoveInProgress";
import Moved from "./Moved";
import TurnStateBase from "./TurnStateBase";


export default class MovementCardUsed extends TurnStateBase {
    public state: "MovementCardUsed" = "MovementCardUsed";
    public order = 4;

    move(targetTile: Tile): MoveInProgress | Moved {
        const inProgress = new MoveInProgress(this.context);
        return inProgress.move(targetTile);
    }
    
    skipMovement(): Moved {
        return new Moved(this.context);
    }
}
