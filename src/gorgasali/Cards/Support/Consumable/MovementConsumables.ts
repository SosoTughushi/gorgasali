import TurnContext from "../../../Turn/TurnContext";
import { Consumable } from "./Consumable";



export abstract class MovementConsumable extends Consumable { }

export class Teleport extends MovementConsumable {
    constructor() {
        super("Teleport", "epic", "Consumable", "Jump on any square within the range",
            undefined, 8, undefined, undefined)
    }

    use(context: TurnContext): void {
        context.movementAmplifiers = { teleport: this }
    }
}

export class Adrenaline extends MovementConsumable {
    constructor() {
        super("Adrenaline", "epic", "Consumable", "Doubles the units rolled for movement", undefined, undefined, undefined, undefined)
    }

    use(context: TurnContext): void {
        if (context.movementDiceTotal) {
            context.movementDiceTotal *= 2;
            context.movementAmplifiers = { adrenaline: this }
        }
    }
}

export class Compass extends MovementConsumable {
    constructor() {
        super("Compass", "rare", "Consumable", "Enables to move diagonally",
            undefined, undefined, undefined, undefined)
    }

    use(context: TurnContext): void {
        context.movementAmplifiers = { compass: this }
    }
}