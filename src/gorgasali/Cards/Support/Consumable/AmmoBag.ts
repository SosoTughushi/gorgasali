import TurnContext from "../../../Turn/TurnContext";
import { Consumable } from "./Consumable";

export default class AmmoBag extends Consumable {
    constructor() {
        super("Ammo bag", "epic", "Consumable", "Instant reload", 
        undefined, undefined, undefined, undefined)
    }
    
    use(context: TurnContext): void {
        context.self.weaponSlot1.needsReload = false;
        context.self.weaponSlot2.needsReload = false;
    }
}