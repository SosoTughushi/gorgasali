import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
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
    
    use(context: TurnContext): void {
        context.self.weaponSlot1.needsReload = false;
        context.self.weaponSlot2.needsReload = false;
    }
}