import { CardSpecialSkill } from "../../Card";
import { Consumable } from "./Consumable";

export default class AmmoBag extends Consumable {
    constructor() {
        super("Ammo bag", "epic", "Consumable", new AmmoBagSpecialSkill(), 
        undefined, undefined, undefined, undefined)
    }
}

class AmmoBagSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Instant reload");
    }
}