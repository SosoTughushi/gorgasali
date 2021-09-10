import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { Consumable } from "./Consumable";



export abstract class MovementConsumable extends Consumable { }

export class Teleport extends MovementConsumable {
    constructor() {
        super("Teleport", "epic", "Consumable", new TeleportSpecialSkill(),
            undefined, 8, undefined, undefined)
    }
}

export class TeleportSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.movementAmplifiers = { teleport: this }
    }
    constructor() {
        super("Jump on any square within the range");
    }
}

export class Adrenaline extends MovementConsumable {
    constructor() {
        super("Adrenaline", "epic", "Consumable", new AdrenalineSpecialSkill(), undefined, undefined, undefined, undefined)
    }
}

export class AdrenalineSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.movementAmplifiers = { adrenaline: this }
    }
    constructor() {
        super("Doubles the units rolled for movement");
    }
}

export class Compass extends MovementConsumable {
    constructor() {
        super("Compass", "rare", "Consumable", new CompassSpecialSkill(),
            undefined, undefined, undefined, undefined)
    }
}

export class CompassSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        context.movementAmplifiers = { compass: this }
    }
    constructor() {
        super("Enables to move diagonally");
    }
}