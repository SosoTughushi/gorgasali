import Tile from "../../Tile";
import { UseMovementCard } from "./turnStateMachine";
import TurnStateBase from "./TurnStateBase";
import MovementCardUsed from "./MovementCardUsed";
import Moved from "./Moved";
import MoveInProgress from "./MoveInProgress";


export default class MovementDiceRolled extends TurnStateBase {

    public state: "MovementDiceRolled" = "MovementDiceRolled";
    public order = 3;
    skipMovement(): Moved {
        return new Moved(this.context);
    }

    useMovementCard(action: UseMovementCard) {
        return new MovementCardUsed(this.context);
    }

    move(targetTile: Tile): MoveInProgress | Moved {
        const inProgress = new MoveInProgress(this.context);
        return inProgress.move(targetTile);
    }
}
