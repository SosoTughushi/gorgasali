import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class Barrier extends Defensive {
    constructor() {
        super("Barrier",
            "epic",
            "Defensive",
            "Blocks movement and targeting",
            undefined,
            undefined,
            undefined,
            undefined
        );
    }

    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
    }
}