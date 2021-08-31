import { CardSpecialSkill } from "../../Card";
import { Consumable } from "./Consumable";

export default class Potion extends Consumable {
    constructor(public size: "Small" | "Medium" | "Large", healingAmount: number) {
        super(size + " potion", mapSizeToColor(size), "Consumable", new PotionSpecialSkill(healingAmount),
            undefined, undefined, undefined, undefined);
    }
}

class PotionSpecialSkill extends CardSpecialSkill {
    constructor(healingAmount: number) {
        super("Restores "+ healingAmount + " points");
    }
}


export function mapSizeToColor(size:"Small" | "Medium" | "Large") : "common"|"rare"|"epic" {
    switch(size) {
        case "Small": return "common";
        case "Medium": return "rare";
        case "Large": return "epic";
    }
}