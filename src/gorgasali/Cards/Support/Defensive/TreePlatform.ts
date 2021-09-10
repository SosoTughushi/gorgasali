import { CardSpecialSkill } from "../../Card";
import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class TreePlatform extends Defensive {
    constructor(){
        super("Tree platform", "rare", "Defensive", new TreePlatformSpecialSkill(), undefined, undefined, undefined, undefined)
    }
}

class TreePlatformSpecialSkill extends CardSpecialSkill {
    constructor() {
        super("Reduce units on the dice for enemy weapons");
    }
    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
        throw new Error("Method not implemented.");
    }
}
