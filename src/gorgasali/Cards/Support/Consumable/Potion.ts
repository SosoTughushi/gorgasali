import CharacterBase from "../../../Characters/Character";
import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { Consumable } from "./Consumable";

export default class Potion extends Consumable {
    constructor(public size: "Small" | "Medium" | "Large") {
        super(size + " potion", mapSizeToColor(size), "Consumable", new PotionSpecialSkill(mapSizeToHealingAmount(size)),
            undefined, undefined, undefined, undefined);
    }
}

function mapSizeToHealingAmount(size: "Small" | "Medium" | "Large"): number {
    switch (size) {
        case "Small": return 20;
        case "Medium": return 50;
        case "Large": return 100;
    }
}

class PotionSpecialSkill extends CardSpecialSkill {
    constructor(public healingAmount: number) {
        super("Restores " + healingAmount + " points");
    } 

    use(context: TurnContext): void {
        context.self.heal(this.healingAmount);
    }
}


export function mapSizeToColor(size: "Small" | "Medium" | "Large"): "common" | "rare" | "epic" {
    switch (size) {
        case "Small": return "common";
        case "Medium": return "rare";
        case "Large": return "epic";
    }
}