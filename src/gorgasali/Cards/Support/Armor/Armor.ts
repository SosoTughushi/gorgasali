import TurnContext from "../../../Turn/TurnContext";
import SupportCard from "../SupportCard";

export class Helmet extends SupportCard {
    public blockedDamage = 10;
    constructor() {
        super("Helmet", "common", "Armor", "Armor", "Blocks 10 damage", undefined, undefined, undefined, undefined);
    }
    use(context: TurnContext): void {
        // liskov violation
    }
}

export class BodyArmor extends SupportCard {
    public blockedDamage = 20;
    constructor() {
        super("Body armor", "common", "Armor", "Armor", "Blocks 20 damage", undefined, undefined, undefined, undefined);
    }
    use(context: TurnContext): void {
        // liskov violation
    }
}