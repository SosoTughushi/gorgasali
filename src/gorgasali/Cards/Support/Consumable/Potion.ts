import CharacterBase from "../../../Characters/Character";
import TurnContext from "../../../Turn/TurnContext";
import HealingCardUsed from "../../../Turn/TurnStates/HealingCardUsed";
import { Consumable } from "./Consumable";

export default class Potion extends Consumable {
    constructor(public size: "Small" | "Medium" | "Large") {
        super(size + " potion", mapSizeToColor(size), "Consumable", "Restores " + mapSizeToHealingAmount(size) + " points",
            undefined, undefined, undefined, undefined);
        this.healingAmount = mapSizeToHealingAmount(size);
    }

    public healingAmount: number;

    use(context: TurnContext): HealingCardUsed {
        context.self.heal(this.healingAmount);
        return new HealingCardUsed(context);
    }

    canUse(context: TurnContext) {
        if(context.self.health === 100) {
            return false;
        }

        return true;
    }
}

function mapSizeToHealingAmount(size: "Small" | "Medium" | "Large"): number {
    switch (size) {
        case "Small": return 20;
        case "Medium": return 50;
        case "Large": return 100;
    }
}


export function mapSizeToColor(size: "Small" | "Medium" | "Large"): "common" | "rare" | "epic" {
    switch (size) {
        case "Small": return "common";
        case "Medium": return "rare";
        case "Large": return "epic";
    }
}