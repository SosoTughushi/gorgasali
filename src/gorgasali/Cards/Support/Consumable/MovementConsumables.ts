import TurnContext from "../../../Turn/TurnContext";
import MovementCardUsed from "../../../Turn/TurnStates/MovementCardUsed";
import { Consumable } from "./Consumable";



export abstract class MovementConsumable extends Consumable { }


export class Teleport extends MovementConsumable {
    constructor() {
        super("Teleport", "epic", "Consumable", "Jump on any square within the range",
            undefined, 8, undefined, undefined)
    }

    use(context: TurnContext): MovementCardUsed {
        context.movementAmplifiers = { teleport: this }
        return new MovementCardUsed(context);
    }
}

export class Adrenaline extends MovementConsumable {
    constructor() {
        super("Adrenaline", "epic", "Consumable", "Doubles the units rolled for movement", undefined, undefined, undefined, undefined)
    }

    use(context: TurnContext): MovementCardUsed {
        if (context.movementDiceTotal) {
            context.movementDiceTotal *= 2;
            context.movementAmplifiers = { adrenaline: this }
        }
        return new MovementCardUsed(context);
    }
}

export class Compass extends MovementConsumable {
    constructor() {
        super("Compass", "rare", "Consumable", "Enables to move diagonally",
            undefined, undefined, undefined, undefined)
    }

    use(context: TurnContext): MovementCardUsed {
        context.movementAmplifiers = { compass: this }
        return new MovementCardUsed(context);
    }
}