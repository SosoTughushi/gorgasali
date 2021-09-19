import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class TreePlatform extends Defensive {
    constructor() {
        super("Tree platform", "rare", "Defensive", "Defensive", "Reduce units on the dice for enemy weapons", undefined, undefined, undefined, undefined)
    }

    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
    }
}
