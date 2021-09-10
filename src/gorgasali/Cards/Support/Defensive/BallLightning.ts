import TurnContext from "../../../Turn/TurnContext";
import { Defensive } from "./Defensive";

export default class BallLightning extends Defensive {
    constructor() {
        super(
            "Ball lightning",
            "legendary",
            "Defensive",
            "Summons ball lightning to defend area",
            undefined,
            3,
            { isFixed: true, value: 35 },
            undefined);
    }

    
    use(context: TurnContext): void {
        // board.placeLightningBall(context.targetIndex)
    }
}
