import Tile from "../../Tile";
import { UseMovementCard } from "./turnStateMachine";
import TurnStateBase from "./TurnStateBase";
import MovementCardUsed from "./MovementCardUsed";
import Moved from "./Moved";
import MoveInProgress from "./MoveInProgress";
import TurnContext from "../TurnContext";
import getMoveDestinations from "../../Board/destinations/getMoveDestinations";


export default class MovementDiceRolled extends TurnStateBase {

    public state: "MovementDiceRolled" = "MovementDiceRolled";
    public order = 3;

    constructor(context: TurnContext) {
        super(context);
        this.availableMoves = getMoveDestinations.bind(context.board)(context);
    }

    selectTile(tile: Tile) {
        return this.move(tile);
    }
    
    skipMovement(): Moved {
        return new Moved(this.context);
    }

    useMovementCard(action: UseMovementCard) {
        return new MovementCardUsed(this.context, this.availableMoves);
    }

    move(targetTile: Tile): MoveInProgress | Moved {
        const inProgress = new MoveInProgress(this.context, this.availableMoves);
        return inProgress.move(targetTile);
    }

    getAvailableActions() {
        return [{
            name: "Skip Movement",
            action: () => this.skipMovement()
        }]
    }
}
