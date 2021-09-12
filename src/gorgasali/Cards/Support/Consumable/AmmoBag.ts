import TurnContext from "../../../Turn/TurnContext";
import AmmoBagUsed from "../../../Turn/TurnStates/AmmoBagUsed";
import { Consumable } from "./Consumable";

export default class AmmoBag extends Consumable {
    constructor() {
        super("Ammo bag", "epic", "Consumable", "Instant reload", 
        undefined, undefined, undefined, undefined)
    }
    
    use(context: TurnContext): AmmoBagUsed {
        context.self.weaponSlot1.needsReload = false;
        context.self.weaponSlot2.needsReload = false;
        return new AmmoBagUsed(context);
    }
}