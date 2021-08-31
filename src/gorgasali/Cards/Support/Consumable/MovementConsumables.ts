import { CardSpecialSkill } from "../../Card";
import { Consumable } from "./Consumable";



abstract class MovementConsumable extends Consumable { }

export class Teleport extends MovementConsumable {
    constructor() {
        super("Teleport", "epic", "Consumable", new TeleportSpecialSkill(), 
        undefined, 8, undefined, undefined)
    }
}

class TeleportSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Jump on any square within the range");
    }
}

export class Adrenaline extends MovementConsumable {
    constructor() {
        super("Adrenaline", "epic", "Consumable", new AdrenalineSpecialSkill(), undefined, undefined, undefined, undefined)
    }
}

class AdrenalineSpecialSkill extends CardSpecialSkill {
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

class CompassSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Enables to move diagonally");
    }
}