import getTeleportDestinations from "../../../../Board/destinations/getTeleportDestinations";
import Tile from "../../../../Tile";
import TurnContext from "../../../../Turn/TurnContext";
import MovementCardUsed from "../../../../Turn/TurnStates/MovementCardUsed";
import MovementDiceRolled from "../../../../Turn/TurnStates/MovementDiceRolled";
import TurnStateBase from "../../../../Turn/TurnStates/TurnStateBase";
import MovementConsumable from "./MovementConsumable";



export default class Teleport extends MovementConsumable {
    constructor() {
        super("Teleport", "epic", "Consumable", "Jump on any square within the range",
            undefined, 8, undefined, undefined);
    }

    use(context: TurnContext): TeleportInProgress {
        context.movementAmplifiers = { teleport: this };
        return new TeleportInProgress(context);
    }
}

export class TeleportInProgress extends TurnStateBase {
    public state: "TeleportInProgress" = "TeleportInProgress";
    public order = 3.5;

    constructor(context: TurnContext) {
        super(context);
        this.availableMoves = getTeleportDestinations.bind(context.board)();
    }

    selectTile(tile: Tile) {
        return this.teleport(tile);
    }

    teleport(target: Tile) {
        this.context.previousLocations.add(this.context.board.currentPlayerPosition);
        this.context.board.moveTo(target.index);
        
        return new MovementCardUsed(this.context, new MovementDiceRolled(this.context).availableMoves);
    }
}