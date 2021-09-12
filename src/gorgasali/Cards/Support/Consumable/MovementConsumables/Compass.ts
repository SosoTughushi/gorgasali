import TurnContext from "../../../../Turn/TurnContext";
import MovementCardUsed from "../../../../Turn/TurnStates/MovementCardUsed";
import MovementConsumable from "./MovementConsumable";



export default class Compass extends MovementConsumable {
    constructor() {
        super("Compass", "rare", "Consumable", "Enables to move diagonally",
            undefined, undefined, undefined, undefined);
    }

    use(context: TurnContext): MovementCardUsed {
        context.movementAmplifiers = { compass: this };
        return new MovementCardUsed(context);
    }
}
