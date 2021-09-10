import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class MagicField extends Defensive {
    constructor() {
        super("Magic field", "rare", "Defensive", "Blocks half of the all incoming damage",
            undefined, undefined, undefined, undefined)
    }
    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
    }
}