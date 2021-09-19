import TurnContext from "../../../Turn/TurnContext";
import AmmoBagUsed from "../../../Turn/TurnStates/AmmoBagUsed";
import { Consumable } from "./Consumable";

export default class AmmoBag extends Consumable {
    constructor() {
        super("Ammo bag", "epic", "Consumable", "AmmoBag", "Instant reload",
            undefined, undefined, undefined, undefined)
    }

    canUse(context: TurnContext) {
        if (context.self.weaponSlot1.card && context.self.weaponSlot1.needsReload) {
            return true;
        }
        if (context.self.weaponSlot2.card && context.self.weaponSlot2.needsReload) {
            return true;
        }
        return false;
    }

    use(context: TurnContext): AmmoBagUsed {
        context.self.weaponSlot1.needsReload = false;
        context.self.weaponSlot2.needsReload = false;
        return new AmmoBagUsed(context);
    }
}