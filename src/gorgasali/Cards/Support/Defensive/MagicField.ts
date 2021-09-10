import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class MagicField extends Defensive {
    constructor() {
        super("Magic field", "rare", "Defensive", new MagicFieldSpecialSkill(), 
        undefined, undefined, undefined, undefined)
    }
}

class MagicFieldSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Blocks half of the all incoming damage");
    }
    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
        throw new Error("Method not implemented.");
    }
}