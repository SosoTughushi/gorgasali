import TurnContext from "../../../../Turn/TurnContext";
import MovementCardUsed from "../../../../Turn/TurnStates/MovementCardUsed";
import MovementConsumable from "./MovementConsumable";



export default class Adrenaline extends MovementConsumable {
    constructor() {
        super("Adrenaline", "epic", "Consumable", "Doubles the units rolled for movement", undefined, undefined, undefined, undefined);
    }

    use(context: TurnContext): MovementCardUsed {
        if (context.movementDiceTotal) {
            context.movementDiceTotal *= 2;
            context.movementAmplifiers = { adrenaline: this };
        }
        return new MovementCardUsed(context);
    }
}
