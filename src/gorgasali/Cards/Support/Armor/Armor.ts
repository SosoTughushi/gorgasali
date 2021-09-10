import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import SupportCard from "../SupportCard";

export class Helmet extends SupportCard {
    constructor() {
        super("Helmet", "common", "Armor", new ArmorSpecialSkill(10), undefined, undefined, undefined, undefined);
    }
}

export class BodyArmor extends SupportCard {
    constructor() {
        super("Body armor", "common", "Armor", new ArmorSpecialSkill(20), undefined, undefined, undefined, undefined);
    }
}

class ArmorSpecialSkill extends CardSpecialSkill {
    use(context: TurnContext): void {
        // liskov violation
    }
    constructor(public blockedDamage: number) {
        super("Blocks " + blockedDamage + " damage");
    }
}